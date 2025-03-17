import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Process from "./Pages/Process";
import Categories from "./Pages/Categories";
import TypeOfDesign from "./Pages/TypeOfDesign";
import Measurements from "./Pages/Measurements";
import Address from "./Pages/Address";
import HomePage from "./Pages/HomePage";
import FooterComponent from "./components/FooterComponent";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

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
        path: "/home",
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
