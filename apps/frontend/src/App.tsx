import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
import Login from "./routes/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
//import SideNavbar from "./components/SideNavbar.tsx";
import "./styles/App.css";
import Requests from "./routes/Requests.tsx";
import { CSVPage } from "./routes/CSVPage.tsx";
//import PathGrapher from "./map_page/PathGrapher.tsx";
import GiftRequest from "./routes/service_request_routes/GiftRequest.tsx";
import MedicineRequest from "./routes/service_request_routes/MedicineRequest.tsx";
import MedicalDeviceRequest from "./routes/service_request_routes/MedicalDeviceRequest.tsx";
import "./index.css";
import Map from "./refactored_map_page/Map.tsx";
import RoomScheduling from "./routes/service_request_routes/RoomScheduling.tsx";
import NewSideNavBar from "./components/NewSideNavBar.tsx";
import Banner from "./components/Banner.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
// import {useAuth0} from "@auth0/auth0-react";

function App() {
  return (
    <Router>
      <ConditionalSideNavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route
          path="/csv-page"
          element={
            <ProtectedRoute roles={["admin"]}>
              <CSVPage />
            </ProtectedRoute>
          }
        />
        <Route path="/flower-delivery" element={<FlowerDelivery />} />
        <Route path="/room-scheduling" element={<RoomScheduling />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/medicine-request" element={<MedicineRequest />} />
        <Route
          path="/gift-request"
          element={
            <ProtectedRoute roles={["admin", "staff"]}>
              <GiftRequest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medical-device-request"
          element={<MedicalDeviceRequest />}
        />
        <Route path="/login" element={<Login />} />
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
  // const { isAuthenticated, user } = useAuth0();

  // Don't render the side navbar on the login route
  if (location.pathname === "/login") {
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

export default App;
