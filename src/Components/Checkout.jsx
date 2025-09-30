import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";
const Checkout = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
  });

  // Button state
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    setDownloadLink("/Magic_Score_eBook.pdf");
    // Start loading
    setIsLoading(true);
    setIsSuccess(false);

    // Simulate form submission delay
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);

      // Success effect
      setIsLoading(false);
      setIsSuccess(true);

      //   // Redirect to bKash after short delay
      //   setTimeout(() => {
      //     window.location.href = "https://your-bkash-link.com";
      //   }, 1000);
    }, 1500);
  };

  return (
    <div id="checkout" className="py-20 px-4 bg-slate-900/50 min-h-screen">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Complete Your Order
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Fill in your billing details below and proceed to pay securely via
          bKash. Your Magic Score eBook will be delivered immediately after
          payment.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
        {/* Left: Billing Details */}
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Full Address"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                required
              />
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>

          {/* Product List */}
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
              <span className="font-semibold">৳499</span>
            </div>
          </div>

          {/* Subtotal / Total */}
          <div className="border-t border-slate-600 mt-4 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳499</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-blue-400">৳499</span>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading || isSuccess}
            className={`w-full mt-6 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-500 to-cyan-500 transition transform hover:scale-105 flex justify-center items-center ${
              isLoading
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-lg hover:shadow-blue-500/50"
            }`}
          >
            {isLoading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6 mr-3"></span>
            ) : isSuccess ? (
              "Success! Redirecting..."
            ) : (
              "Pay Online with bKash"
            )}
            {!isLoading && !isSuccess && "Pay Online with bKash"}
          </button>

          {/* Terms */}
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
              <span className="font-semibold text-blue-400">
                {formData.email}
              </span>{" "}
              within 30 minutes.
            </p>
            <a
              href={downloadLink}
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition mb-4"
            >
              <Download size={20} /> Download Now
            </a>
            <p className="text-sm text-gray-400 mb-6">
              (Download link also sent to your email)
            </p>
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
