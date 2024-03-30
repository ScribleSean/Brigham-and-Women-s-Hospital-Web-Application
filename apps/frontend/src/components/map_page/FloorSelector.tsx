import { FloorSelectorProps } from "../../types/map_page_types.ts";
import { CSSProperties } from "react";
import { FloorType } from "../../algorithms/DataStructures.ts";
import "bootstrap/dist/css/bootstrap.min.css";

export function FloorSelector(props: FloorSelectorProps): React.JSX.Element {
  const { updateFloor } = props;

  const formStyle: CSSProperties = {
    paddingTop: "5%",
    paddingBottom: "3%",
    paddingLeft: "8%",
    paddingRight: "8%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5%",
    width: "100%",
  };

  const buttonStyle: CSSProperties = {
    padding: "2.5% 2.5%",
    fontSize: "20px",
    width: "20%",
    height: "70%",
    backgroundColor: "012D5A",
  };

  return (
    <form style={formStyle}>
      <input
        type="radio"
        className="btn-check"
        id="btn-check-l2"
        name="floorSelection"
        autoComplete="off"
        onClick={() => updateFloor(FloorType.L2)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-l2"
        style={buttonStyle}
      >
        L2
      </label>

      <input
        type="radio"
        className="btn-check"
        id="btn-check-l1"
        name="floorSelection"
        onClick={() => updateFloor(FloorType.L1)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-l1"
        style={buttonStyle}
      >
        L1
      </label>

      <input
        type="radio"
        className="btn-check"
        id="btn-check-first"
        name="floorSelection"
        defaultChecked
        onClick={() => updateFloor(FloorType.first)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-first"
        style={buttonStyle}
      >
        Floor 1
      </label>

      <input
        type="radio"
        className="btn-check"
        id="btn-check-second"
        name="floorSelection"
        onClick={() => updateFloor(FloorType.second)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-second"
        style={buttonStyle}
      >
        Floor 2
      </label>

      <input
        type="radio"
        className="btn-check"
        id="btn-check-third"
        name="floorSelection"
        onClick={() => updateFloor(FloorType.third)}
      />
      <label
        className="btn btn-primary"
        htmlFor="btn-check-third"
        style={buttonStyle}
      >
        Floor 3
      </label>
    </form>
  );
}
