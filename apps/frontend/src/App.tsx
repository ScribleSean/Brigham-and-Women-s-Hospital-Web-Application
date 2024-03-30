import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import ExampleRoute from "./routes/ExampleRoute.tsx";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          // path: "",
          // element: <FlowerDeliveryRoute />,
        },
      ],
    },
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
        <Outlet />
      </div>
    );
  }
}

export default App;
