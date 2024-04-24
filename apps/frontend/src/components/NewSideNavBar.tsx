import MapIcon from "@mui/icons-material/Map";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import styles from "../styles/NewSideNavBar.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalanceIcon";

function NewSideNavBar() {
  const { user } = useAuth0();
  function isAdmin() {
    const userRoles = user ? user["http://localhost:3000/roles"] : [];
    return userRoles.includes("admin");
  }

  const [collapsed, setCollapsed] = useState(true);

  const location = useLocation();

  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${
          collapsed ? styles.collapsed : styles.expanded
        }`}
        onMouseOver={() => {
          setCollapsed(false);
        }}
        onMouseOut={() => {
          setCollapsed(true);
        }}
      >
        <Link
          to={`${isAdmin() ? "/admin-map" : "/public-map"}`}
          className={`${styles.navButtons}`}
        >
          <div
            className={`${styles.row} ${
              currentLocation === "/" ? styles.selected : null
            }`}
          >
            <MapIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>Map</p>
          </div>
        </Link>
        <Link to="/dashboard" className={`${styles.navButtons}`}>
          <div
            className={`${styles.row} ${
              currentLocation === "/dashboard" ? styles.selected : ""
            }`}
          >
            <DashboardIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>Dashboard</p>
          </div>
        </Link>
        <Link to="/csv-page" className={`${styles.navButtons}`}>
          <div
            className={`${styles.row} ${
              currentLocation === "/csv-page" ? styles.selected : ""
            }`}
          >
            <ListAltIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>File Viewer</p>
          </div>
        </Link>
        <Link to="/brigham-breakout-start" className={`${styles.navButtons}`}>
          <div
            className={`${styles.row} ${
              currentLocation === "/brigham-breakout-start"
                ? styles.selected
                : ""
            }`}
          >
            <ListAltIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>Brigham Breakout</p>
          </div>
        </Link>
      </div>
      <div className={`${styles.grayOut} ${collapsed ? "" : styles.show}`} />
    </>
  );
}

export default NewSideNavBar;
