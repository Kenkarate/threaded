import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Process from "./Pages/Process";
import Categories from "./Pages/Categories";

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
        element: <BodyComponent />,
      },
      {
        path: "/steps",
        element: <Process />,
      },{
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
