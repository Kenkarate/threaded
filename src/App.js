import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent"
const AppLayout = () => {
    return (
      <div className="AppLayout">
        <HeaderComponent/>
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
          path: "/",
          element: <BodyComponent />,
        },
      ],
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);