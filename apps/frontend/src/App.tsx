import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
import Login from "./routes/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./components/SideNavbar.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          path: "",
          element: <SideNavbar />,
        },
      ],
    },
    {
        path: "/login",
        element: <Login />
    }
    {
      path: "routes/service_request_routes/FlowerDelivery", // Define the route for Flower Delivery page
      element: <FlowerDelivery />,
    },
  ]);

  return <RouterProvider router={router} />;
  function Root() {
    return (
      <div className="container-fluid">
        <FlowerDelivery />
      <div className="w-full flex flex-col px-20 gap-5">
        <Outlet />
      </div>
    );
  }
}

export default App;
