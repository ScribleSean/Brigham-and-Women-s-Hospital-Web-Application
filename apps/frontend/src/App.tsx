import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeroPage from "./routes/HeroPage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.module.css";
import { CSVPage } from "./routes/CSVPage.tsx";
import "./index.css";
import AdminMap from "./refactored_map_page/AdminMap.tsx";
import NewSideNavBar from "./components/NewSideNavBar.tsx";
import Banner from "./components/Banner.tsx";
import Dashboard from "./routes/Dashboard.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          path: "/",
          element: <AdminMap />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/csv-page",
          element: <CSVPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <HeroPage />,
    },
    {
      path: "/dashboard", // this is all placeholder until we have a real login system
      element: (
        <>
          <Banner
            bannerState={"loggedIn"}
            name={"Gus"}
            role={"Admin"}
            email={"gmmontana@wpi.edu"}
          />
          <Dashboard />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;

  function Root() {
    return (
      <>
        <Banner
          bannerState={"loggedIn"}
          name={"[User]"}
          role={"Admin"}
          email={"example@wpi.edu"}
        />
        <NewSideNavBar />
        <Outlet />
      </>
    );
  }
}

export default App;
