import { EditorProps } from "./types/map_page_types.ts";
import { CSSProperties } from "react";

export default Editor;

const buttomStyle: CSSProperties = {
  position: "absolute",
  width: "20%",
  height: "20%",
  zIndex: 5,
};

function Editor(props: EditorProps) {
  const handleOnClick = () => {
    props.changeEditorMode(props.currentEditorMode);
  };

  return <button style={buttomStyle} onClick={handleOnClick}></button>;
}
