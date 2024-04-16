import "../styles/HeroPage.css";
// import 'animate.css';
// import {Button} from "@mui/material";
// @import "~animate.css/animate.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function heroPage() {
  return (
    <div className={"image-area"}>
      <div className={"gradient row"}>
        {/*Text*/}
        <div className={"col-8"}>
          <div className={"hero-text"}>
            {" "}
            Welcome to Brigham and Women's Hospital{" "}
          </div>
          <div className={"hero-text-p"}>
            <p>
              {" "}
              Helping our patients and their families get back to what matters
              most.
            </p>
          </div>
        </div>

        {/*map function*/}
        <div className={"col-4 d-flex justify-content-end"}>
          <div className={"toMap"}>
            <button className={"button-class"}> Go To Map </button>
            <ArrowCircleRightIcon
              sx={{ color: "#ffffff", fontSize: 48 }}
            ></ArrowCircleRightIcon>
            {/*<div className={"arrow"} ></div>*/}
          </div>
          {/*<div className={"d-flex justify-content-start"}>*/}
          {/*    <p> Staff Member? Log In</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
