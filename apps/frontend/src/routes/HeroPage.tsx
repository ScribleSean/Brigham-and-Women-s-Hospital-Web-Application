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
        <div className={"col-9"}>
          <div className={"hero-text"}>
            {" "}
            Welcome to Brigham and Women's Hospital{" "}
          </div>
          <div className="carousel hero-text-p">
            <div>
              <p>
                Helping our patients and their families get back to what matters
                most.
              </p>
              <p>
                Excellence in medical research and patient care, our commitment
                continues.
              </p>
              <p>
                Dedicated to a century of leadership in healthcare and patient
                service.
              </p>
              <p>
                Leading the way in comprehensive healthcare, where every patient
                is family.
              </p>
              <p>
                Together in health, every step of the way—because family
                matters.
              </p>
              <p>Text 6</p>
            </div>
          </div>
        </div>

        {/*map function*/}
        <div className={"col-3 d-flex justify-content-end"}>
          <div className={"toMap"}>
            <button className={"button-class"}> Go To Map</button>
            <ArrowCircleRightIcon
              sx={{ color: "#ffffff", fontSize: 55 }}
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
