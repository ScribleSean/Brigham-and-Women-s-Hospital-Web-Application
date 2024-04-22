import { useAuth0 } from "@auth0/auth0-react";
import "../styles/HeroPage.css";
// import 'animate.css';
// import {Button} from "@mui/material";
// @import "~animate.css/animate.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import HumidityIcon from "../../public/Humidty.png";

function addAnimationClass(e: Event) {
  e.preventDefault(); // Prevent the default action (navigation)

  // Get the link element and its href
  const linkElement = document.getElementById("toMapClump");
  // @ts-expect-error works
  const href = linkElement.getAttribute("href");
  let timer = 0;

  if (linkElement) {
    if (Math.floor(Math.random() * 5) == 1) {
      linkElement.classList.add("animate__hinge");
      timer = 2500;
    } else {
      linkElement.classList.add("animate__bounceOutRight");
      timer = 1000;
    }
  }
  // Remove and add classes as before
  // @ts-expect-error works
  linkElement.classList.remove("animate__slower", "animate__infinite");

  // Wait for the animation to complete (adjust the duration as needed)
  setTimeout(() => {
    // Navigate to the link's href
    // @ts-expect-error works
    window.location.href = href;
  }, timer); // 1000ms = 1s
}

function HeroPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={"image-area"}>
      <div className={"gradient row m-0"}>
        {/*Hospital Text*/}
        <div className={" col-8 p-5 "}>
          <div className={"header "}>
            Welcome to Brigham and Women's Hospital
          </div>

          <div className={"space "}></div>

          {/*Carousel*/}
          <div className="carousel subtitle ">
            <div>
              <span>
                Helping our patients and their families get back to what matters
                most.
              </span>
              <span>
                Excellence in medical research and patient care, our commitment
                continues.
              </span>
              <span>
                Dedicated to a century of leadership in healthcare and patient
                service.
              </span>
              <span>
                Leading the way in comprehensive healthcare, where every patient
                is family.
              </span>
              <span>
                Together in health, every step of the way—because family
                matters.
              </span>
              <span>
                Helping our patients and their families get back to what matters
                most.
              </span>
            </div>
          </div>
        </div>

        {/*Right hand Column*/}

        <div
          className={" col-4 p-0 d-flex flex-column justify-content-between "}
        >
          {/*room settings display*/}
          <div className={"boxPad "}>
            <div className={"d-flex justify-content-end"}>
              <DeviceThermostatIcon sx={{ color: "#ffffff", fontSize: 55 }}>
                {" "}
              </DeviceThermostatIcon>
            </div>

            <div className={"d-flex justify-content-end"}>
              <img src={HumidityIcon} alt={"Image"} width={"50"} />
            </div>
          </div>

          {/*Go to map*/}
          <div className={"boxMarg d-flex justify-content-end paragraph "}>
            <a
              href={`${isAuthenticated ? "/dashboard" : "/public-map"}`}
              id={"toMapClump"}
              className={
                "toMap animate__animated animate__slower animate__headShake animate__infinite"
              }
              // @ts-expect-error works
              onClick={addAnimationClass}
            >
              <button className={"button-class"}> Go To Map</button>
              <ArrowCircleRightIcon
                sx={{
                  color: "#ffffff",
                  width: "1.75em",
                  height: "1.75em",

                  marginBottom: 1,
                }}
              ></ArrowCircleRightIcon>
            </a>
          </div>

          {/*admin login*/}
          <div className={"d-flex justify-content-center paragraph "}>
            <p className={"boxPad"}> Staff Member? Log In</p>
            {/*<p>Log In</p>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
