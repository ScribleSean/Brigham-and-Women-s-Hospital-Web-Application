import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
import Login from "./routes/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./components/SideNavbar.tsx";
import "./styles/App.css";
import Requests from "./routes/Requests.tsx";
import { CSVPage } from "./routes/CSVPage.tsx";
import PathGrapher from "./map_page/PathGrapher.tsx";
import GiftRequest from "./routes/service_request_routes/GiftRequest.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <SideNavbar />
          <div className={"mapfix"}>
            <PathGrapher />
          </div>
        </div>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/csv-page",
      element: <CSVPage />,
    },
    {
      path: "/flower-delivery",
      element: <FlowerDelivery />,
    },
    {
      path: "/gift-request",
      element: <GiftRequest />,
    },
    {
      path: "/requests",
      element: <Requests />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
