import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
import Login from "./routes/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./components/SideNavbar.tsx";
import "./styles/App.css";
import Requests from "./components/Requests.tsx";
import {NodeEdgeData} from "./routes/CSVPage.tsx";

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
      element: <Login />,
    },
      {
          path: "/csvpage",
          element: <NodeEdgeData />,
      },
    {
      path: "/flower-delivery", // Define the route for Flower Delivery page
      element: (
        <div>
          <SideNavbar />
          <FlowerDelivery />
        </div>
      ),
    },
    {
      path: "/requests",
      element: (
        <div>
          <SideNavbar />
          <div className="navFix">
            <Requests />
          </div>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
  function Root() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default App;
