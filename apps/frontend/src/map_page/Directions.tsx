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
        width: "7vw",
        backgroundColor: "#012D5A",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "2vw",
        marginTop: "22vh",
        ":hover": { backgroundColor: "#F6BD39!important" },
      }}
    >
      Next Floor
    </Button>
  );
}
