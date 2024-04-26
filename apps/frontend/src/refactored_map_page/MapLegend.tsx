import { Box } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import EscalatorIcon from "../../public/mapiconpics/EscalatorIcon.png";
import firstAidIcon from "../../public/mapiconpics/firstAidIcon.png";

function MapLegend() {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 5,
        backgroundColor: "white",
        fontColor: "black",
        right: 0,
        marginTop: "80px",
        marginRight: "10px",
        borderRadius: "10px",
        minHeight: "200px",
        minWidth: "150px",
        fontSize: 15,
        boxShadow: "0px 0px 3px",
      }}
    >
      <div style={{ padding: "3px" }}>
        <p>
          <MyLocationIcon />
          Restrooms
        </p>
        <p>
          <img
            src={EscalatorIcon}
            alt="EscalatorIcon"
            style={{ height: "25px", width: "29px" }}
          />
          Escalators
        </p>
        <p>
          <img
            src={firstAidIcon}
            alt="firstAidIcon"
            style={{ height: "25px", width: "29px" }}
          />
          First Aid
        </p>
        <p>
          <MyLocationIcon />
          Elevators
        </p>
      </div>
    </Box>
  );
}

export default MapLegend;
