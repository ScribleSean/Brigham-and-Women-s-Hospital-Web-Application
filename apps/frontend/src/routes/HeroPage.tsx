import "../styles/HeroPage.css";
// import 'animate.css';
// import {Button} from "@mui/material";
// @import "~animate.css/animate.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function addAnimationClass() {
  // @ts-expect-error I hate this
  document
    .getElementById("toMapClump")
    .classList.remove("animate__slower", "animate__infinite");
  // @ts-expect-error I hate this
  document
    .getElementById("toMapClump")
    .classList.add("animate__bounceOutRight");
}

export default function heroPage() {
  return (
    <div className={"image-area"}>
      <div className={"gradient row"}>
        {/*Text*/}
        <div className={"col-8"}>
          <div className={"hero-text"}>
            Welcome to Brigham and Women's Hospital
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
            </div>
          </div>
        </div>

        {/*map function*/}
        <div className={"col-4 d-flex justify-content-end"}>
          <div
            id={"toMapClump"}
            className={
              "toMap animate__animated animate__slower animate__headShake animate__infinite"
            }
            onClick={addAnimationClass}
          >
            <button className={"button-class"}> Go To Map</button>
            <ArrowCircleRightIcon
              sx={{
                color: "#ffffff",
                fontSize: 55,
                marginBottom: 1,
              }}
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
