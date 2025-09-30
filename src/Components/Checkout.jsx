import { useState, useEffect } from "react";
import { Download, CheckCircle } from "lucide-react";

const Checkout = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [downloadLink, setDownloadLink] = useState("/download/magic_score_ebook.pdf");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [paymentID, setPaymentID] = useState("");
  const [isPolling, setIsPolling] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/bkash-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, amount: 10 }),
      });

      const data = await res.json();
      if (data?.bkashURL) {
        setPaymentID(data.paymentID);
        // Redirect user to bKash payment page
        window.location.href = data.bkashURL;
      } else {
        console.error("Payment initiation failed:", data);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setIsLoading(false);
    }
  };

  // Poll payment status after returning from bKash
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const returnedPaymentID = params.get("paymentID") || paymentID;
    if (!returnedPaymentID) return;

    setIsPolling(true);
    const interval = setInterval(async () => {
      try {
        // Execute payment first
        await fetch(`http://localhost:5000/api/bkash-execute/${returnedPaymentID}`, {
          method: "POST",
        });

        // Check payment status
        const res = await fetch(
          `http://localhost:5000/api/payment-status/${returnedPaymentID}`
        );
        const data = await res.json();

        if (data.status === "Success") {
          setOrderSuccess(true);
          setIsLoading(false);
          setIsPolling(false);
          clearInterval(interval);
        } else if (data.status === "Failed") {
          alert("Payment failed or wallet locked. Please try again.");
          setIsLoading(false);
          setIsPolling(false);
          clearInterval(interval);
        }
      } catch (err) {
        console.error("Polling error:", err);
        setIsLoading(false);
        setIsPolling(false);
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paymentID]);

  return (
    <div id="checkout" className="py-20 px-4 bg-slate-900/50 min-h-screen">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Complete Your Order
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Fill in your billing details below and proceed to pay securely via bKash.
          Your Magic Score eBook will be delivered immediately after payment.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
        {/* Left: Billing Details */}
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {["fullName", "address", "phone", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold mb-1">
                  {field === "fullName"
                    ? "Full Name *"
                    : field === "address"
                    ? "Full Address *"
                    : field === "phone"
                    ? "Phone *"
                    : "Email Address *"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                  required
                />
              </div>
            ))}
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/imageOne.png"
                  alt="Magic Score eBook"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span>Magic Score eBook</span>
              </div>
              <span className="font-semibold">৳10</span>
            </div>
          </div>
          <div className="border-t border-slate-600 mt-4 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳10</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-blue-400">৳10</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading || isPolling}
            className={`w-full mt-6 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-500 to-cyan-500 transition transform hover:scale-105 flex justify-center items-center ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:shadow-blue-500/50"
            }`}
          >
            {isLoading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6 mr-3"></span>
            ) : isPolling ? (
              "Waiting for payment..."
            ) : (
              "Pay Online with bKash"
            )}
          </button>

          <div className="mt-4 text-xs text-gray-400">
            By placing your order, you agree to our Terms and Conditions,
            Privacy Policy, and Refund Policy.
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {orderSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Order Successful!</h3>
            <p className="text-gray-300 mb-6">
              Your order has been received. We'll verify your payment and send
              the eBook to{" "}
              <span className="font-semibold text-blue-400">{formData.email}</span>{" "}
              within 30 minutes.
            </p>
            <a
              href={downloadLink}
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition mb-4"
            >
              <Download size={20} /> Download Now
            </a>
            <p className="text-sm text-gray-400 mb-6">(Download link also sent to your email)</p>
            <button
              onClick={() => setOrderSuccess(false)}
              className="text-gray-400 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
