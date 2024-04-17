import React from "react";
import HeroPage from "./routes/HeroPage.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.module.css";
import { CSVPage } from "./routes/CSVPage.tsx";
import "./index.css";
import AdminMap from "./refactored_map_page/AdminMap.tsx";
import PublicMap from "./refactored_map_page/PublicMap.tsx";
import NewSideNavBar from "./components/NewSideNavBar.tsx";
import Banner from "./components/Banner.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { useAuth0 } from "@auth0/auth0-react";
// import {useAuth0} from "@auth0/auth0-react";

function App() {
  return (
    <Router>
      <ConditionalSideNavBar />
      <ConditionalBanner />
      <Routes>
        <Route path="/" element={<HeroPage />} />
          <Route path="/public-map" element={<PublicMap />} />
        <Route
          path="/csv-page"
          element={
            <ProtectedRoute roles={["admin"]}>
              <CSVPage />
            </ProtectedRoute>
          }
        />
        <Route
            path="/admin-map"
            element={
                <ProtectedRoute roles={["admin"]}>
                    <AdminMap />
                </ProtectedRoute>
            }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["admin", "staff"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function ConditionalSideNavBar() {
  const location = useLocation();
  const { isAuthenticated  } = useAuth0();
  // const { isAuthenticated, user } = useAuth0();

  // Don't render the side navbar on the login route
  if (location.pathname === "/" || (location.pathname === "/public-map" && !isAuthenticated)) {
    return null;
  }
  else if(!isAuthenticated){
      return null;
  }

  // Don't render the side navbar if the user is not authenticated
  // if (!isAuthenticated) {
  //     return null;
  // }

  // Don't render the side navbar if the user is not an employee
  // const userRoles = user ? user['http://localhost:3000/roles'] : [];
  // const isEmployee = userRoles.some((role: string) => ['admin', 'staff'].includes(role));
  // if (!isEmployee) {
  //     return null;
  // }

  return <NewSideNavBar />;
}

function ConditionalBanner() {
    const location = useLocation();
    // const { isAuthenticated, user } = useAuth0();

    // Don't render the side navbar on the login route
    if (location.pathname === "/") {
        return null;
    }

    // Don't render the side navbar if the user is not authenticated
    // if (!isAuthenticated) {
    //     return null;
    // }

    // Don't render the side navbar if the user is not an employee
    // const userRoles = user ? user['http://localhost:3000/roles'] : [];
    // const isEmployee = userRoles.some((role: string) => ['admin', 'staff'].includes(role));
    // if (!isEmployee) {
    //     return null;
    // }

    return <Banner />;
}

export default App;
