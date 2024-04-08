import { DirectionsProps } from "./types/map_page_types.ts";
import { Button } from "@mui/material";

export default Directions;

function Directions(props: DirectionsProps) {
  const handleOnClick = () => {
    props.triggerNextDirection(props.currentDirectionsCounter);
  };

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        position: "absolute",
        backgroundColor: "white",
        color: "#012D5A",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        borderRadius: "o.5rem",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "2vw",
        marginTop: "19vh",
      }}
    >
      Next Floor
    </Button>
  );
}
