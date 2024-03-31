import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
  ]);

  return <RouterProvider router={router} />;
  function Root() {
    return (
      <div className="w-full flex flex-col px-20 gap-5">
        <Outlet />
      </div>
    );
  }
}

export default App;
