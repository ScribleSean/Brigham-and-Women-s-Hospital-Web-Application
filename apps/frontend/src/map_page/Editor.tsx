import { EditorProps } from "./types/map_page_types.ts";
import { Button } from "@mui/material";

export default Editor;

function Editor(props: EditorProps) {
  const handleOnClick = () => {
    props.changeEditorMode(props.currentEditorMode);
  };

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        position: "absolute",
        width: "7vw",
        backgroundColor: props.currentEditorMode ? "#F6BD39" : "#012D5A",
        color: "white",
        fontWeight: "bold",
        fontFamily: "inter",
        textTransform: "capitalize",
        boxShadow: 8,
        zIndex: 4,
        marginLeft: "10vw",
        marginTop: "22vh",
        ":hover": { backgroundColor: "#F6BD39!important" },
      }}
    >
      Edit Map
    </Button>
  );
}
