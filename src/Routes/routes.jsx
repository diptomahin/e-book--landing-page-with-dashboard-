import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OrderConfirmation from "../Pages/Thankyou/OrderConfirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/thank-you",
    element: <OrderConfirmation />,
  },
]);
export default router;
