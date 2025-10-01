import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token"); // ✅ use token

  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:5000/api/order/${token}`)
        .then((res) => res.json())
        .then((data) => setOrder(data))
        .catch(console.error);
    }
  }, [token]);

  if (!order) return <div className="text-white p-8">Loading invoice...</div>;

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Invoice</h2>
        <p><strong>Order ID:</strong> {order.orderID}</p>
        <p><strong>Name:</strong> {order.formData.fullName}</p>
        <p><strong>Email:</strong> {order.formData.email}</p>
        <p><strong>Phone:</strong> {order.formData.phone}</p>
        <p><strong>Address:</strong> {order.formData.address}</p>

        <div className="mt-4 border-t border-slate-600 pt-4">
          <h3 className="font-bold text-lg mb-2">Items</h3>
          {order.items?.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{item.name}</span>
              <span>৳{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2 font-bold text-lg">
            <span>Total</span>
            <span>৳{order.amount}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center">
          <a
            href={`http://localhost:5000/api/ebooks/download/ebook1.pdf?token=${order.token}`}
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition"
          >
            Download eBook
          </a>
          <Link to={"/"}
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
