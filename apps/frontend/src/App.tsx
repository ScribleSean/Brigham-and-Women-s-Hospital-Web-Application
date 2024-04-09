import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
import Login from "./routes/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./components/SideNavbar.tsx";
import "./styles/App.css";
import Requests from "./routes/Requests.tsx";
import { CSVPage } from "./routes/CSVPage.tsx";
import PathGrapher from "./map_page/PathGrapher.tsx";
import MedicineRequest from "./routes/service_request_routes/MedicineRequest.tsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          path: "/",
          element: (
            <div className={"mapfix"}>
              <PathGrapher />
            </div>
          ),
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
          path: "/requests",
          element: <Requests />,
        },
        {
          path: "/medicine-request",
          element: <MedicineRequest />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;

  function Root() {
    return (
      <div>
        <SideNavbar />
        <Outlet />
      </div>
    );
  }
}

export default App;
