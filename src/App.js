import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet,  useNavigate, Navigate } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Process from "./Pages/Process";
import Categories from "./Pages/Categories";
import HomePage from "./Pages/HomePage";
import FooterComponent from "./components/FooterComponent";
import { Provider } from "react-redux";
import { store, persistor } from "./Utils/store/store";
import { PersistGate } from "redux-persist/integration/react";
import CartPage from "./Pages/Cart";
import CheckoutPage from "./Pages/CheckoutPage";
import ThankYouPage from "./Pages/ThankyouPage";
import { useSelector } from "react-redux";
import { db } from "../Firebase"; 

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};
function CheckoutRouteWrapper() {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.auth.formData);
  const user = useSelector((state) => state.auth.user); 
if (!formData) {
    return <Navigate to="/steps" replace />;
  }
  return (
    <CheckoutPage
      formData={formData}
      user={user}
      db={db}
      onPaymentSuccess={() => {
        navigate("/Thankyou");
      }}
    />
  );
}
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/steps",
        element: <Process />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutRouteWrapper />,
      },
      {
        path: "/Thankyou",
        element: <ThankYouPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={approuter} />
    </PersistGate>
  </Provider>
);
