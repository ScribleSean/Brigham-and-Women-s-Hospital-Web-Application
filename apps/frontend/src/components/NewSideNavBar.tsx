import "./NewSideNavBar.css";
import MapIcon from "@mui/icons-material/Map";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Box } from "@mui/material";
import { useState } from "react";

function NewSideNavBar() {
  // State to track the currently active icon
  const [activeIcon, setActiveIcon] = useState("map");

  // Function to handle icon click, setting the clicked icon as active and others as inactive
  const handleIconClick = (icon) => {
    setActiveIcon(icon); // Toggle active icon
  };

  return (
    <div className="newNavBar">
      <div className="iconsContainer">
        <div className="navBarIcons">
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              width: 60,
              height: 60,
              backgroundColor: activeIcon === "map" ? "#CDE1F5" : "transparent",
              borderRadius: "15%",
              "&:hover": {
                backgroundColor:
                  activeIcon === "map" ? "#CDE1F5" : "rgba(205, 225, 245, 0.4)",
                cursor: "pointer",
              },
              "& .icon": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: activeIcon === "map" ? "#012d5a" : "#FFFFFF",
                zIndex: 1,
                opacity: 1,
              },
            }}
            onClick={() => handleIconClick("map")}
          >
            <MapIcon className="icon" sx={{ fontSize: 55 }} />
          </Box>
        </div>
        <div className="navBarIcons">
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              width: 60,
              height: 60,
              backgroundColor:
                activeIcon === "dashboard" ? "#CDE1F5" : "transparent",
              borderRadius: "15%",
              "&:hover": {
                backgroundColor:
                  activeIcon === "dashboard"
                    ? "#CDE1F5"
                    : "rgba(205, 225, 245, 0.4)",
                cursor: "pointer",
              },
              "& .icon": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: activeIcon === "dashboard" ? "#012d5a" : "#FFFFFF",
                zIndex: 1,
                opacity: 1,
              },
            }}
            onClick={() => handleIconClick("dashboard")}
          >
            <DashboardIcon className="icon" sx={{ fontSize: 55 }} />
          </Box>
        </div>
        <div className="navBarIcons">
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              width: 60,
              height: 60,
              backgroundColor:
                activeIcon === "listAlt" ? "#CDE1F5" : "transparent",
              borderRadius: "15%",
              "&:hover": {
                backgroundColor:
                  activeIcon === "listAlt"
                    ? "#CDE1F5"
                    : "rgba(205, 225, 245, 0.4)",
                cursor: "pointer",
              },
              "& .icon": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: activeIcon === "listAlt" ? "#012d5a" : "#FFFFFF",
                zIndex: 1,
                opacity: 1,
              },
            }}
            onClick={() => handleIconClick("listAlt")}
          >
            <ListAltIcon className="icon" sx={{ fontSize: 55 }} />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default NewSideNavBar;
