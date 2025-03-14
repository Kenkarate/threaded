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

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Login />,
      },
      {
        path: "/steps",
        element: <Process />,
      },{
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/typeofdesign/:title",
        element: <TypeOfDesign />,
      },
      {
        path: "/measurements",
        element: <Measurements />,
      },
      {
        path: "/address",
        element: <Address />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
