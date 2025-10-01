import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fetch orders
  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-white mt-10">Loading dashboard...</div>;

  // Prepare sales chart data
  const monthlySales = {};
  orders.forEach((order) => {
    if (order.status !== "Success") return;
    const month = order.createdAt
      ? new Date(order.createdAt).toLocaleString("default", { month: "short" })
      : "Unknown";
    monthlySales[month] = (monthlySales[month] || 0) + (order.amount || 0);
  });

  const chartData = {
    labels: Object.keys(monthlySales),
    datasets: [
      {
        label: "Sales (BDT)",
        data: Object.values(monthlySales),
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.2)",
      },
    ],
  };

  const totalRevenue = orders.filter(o => o.status === "Success").reduce((sum, o) => sum + (o.amount || 0), 0);
  const totalOrders = orders.length;
  const successfulOrders = orders.filter(o => o.status === "Success").length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">eBook Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold">৳{totalRevenue}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Successful Orders</h2>
          <p className="text-2xl font-bold">{successfulOrders}</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
        <Line data={chartData} />
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderID || "N/A"}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.formData?.fullName || "N/A"}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.items?.map(item => item.name).join(", ") || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">৳{order.amount || 0}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                    order.status === "Success" ? "text-green-600" :
                    order.status === "Pending" ? "text-yellow-500" : "text-red-500"
                  }`}>
                    {order.status || "Unknown"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Buyer Details</h2>
            <p><strong>Full Name:</strong> {selectedOrder.formData?.fullName || "N/A"}</p>
            <p><strong>Email:</strong> {selectedOrder.formData?.email || "N/A"}</p>
            <p><strong>Phone:</strong> {selectedOrder.formData?.phone || "N/A"}</p>
            <p><strong>Address:</strong> {selectedOrder.formData?.address || "N/A"}</p>
            <p><strong>Buying Date & Time:</strong> {selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString() : "N/A"}</p>
            <p><strong>Transaction ID:</strong> {selectedOrder.transaction?.trxID || "N/A"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
