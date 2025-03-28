import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Process from "./Pages/Process";
import Categories from "./Pages/Categories";
import HomePage from "./Pages/HomePage";
import FooterComponent from "./components/FooterComponent";
import { Provider } from "react-redux";
import { store, persistor } from "./Utils/store/store";
import { PersistGate } from "redux-persist/integration/react";

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
