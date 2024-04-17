import MapIcon from "@mui/icons-material/Map";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import styles from "../styles/NewSideNavBar.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NewSideNavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const location = useLocation();

  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${collapsed ? styles.collapsed : styles.expanded}`}
        onMouseOver={() => {
          setCollapsed(false);
        }}
        onMouseOut={() => {
          setCollapsed(true);
        }}
      >
        <Link to="/admin-map" className={`${styles.navButtons}`}>
          <div
            className={`${styles.row} ${currentLocation === "/" ? styles.selected : null}`}
          >
            <MapIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>Map</p>
          </div>
        </Link>
        <Link to="/dashboard" className={`${styles.navButtons}`}>
          <div
            className={`${styles.row} ${currentLocation === "/dashboard" ? styles.selected : ""}`}
          >
            <DashboardIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>Dashboard</p>
          </div>
        </Link>
        <Link to="/csv-page" className={`${styles.navButtons}`}>
          <div
            className={`${styles.row} ${currentLocation === "/csv-page" ? styles.selected : ""}`}
          >
            <ListAltIcon sx={{ fontSize: "35px" }} />
            <p className={`${styles.navbarLabels}`}>File Viewer</p>
          </div>
        </Link>
      </div>
        <div className={`${styles.grayOut} ${collapsed ? '' : styles.show}`} />
    </>
  );
}

export default NewSideNavBar;
