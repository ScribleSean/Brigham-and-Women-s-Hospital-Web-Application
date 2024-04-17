import { useAuth0 } from "@auth0/auth0-react";
import "../styles/HeroPage.css";
// import 'animate.css';
// import {Button} from "@mui/material";
// @import "~animate.css/animate.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function addAnimationClass(e: Event) {
    e.preventDefault(); // Prevent the default action (navigation)

    // Get the link element and its href
    const linkElement = document.getElementById("toMapClump");
    // @ts-expect-error works
    const href = linkElement.getAttribute('href');
    let timer = 0;

    if(linkElement){
        if(Math.floor(Math.random() * 5) == 1){
            linkElement.classList.add("animate__hinge");
            timer = 2500;
        }
        else{
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
    const {  isAuthenticated  } = useAuth0();

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
          <a  href={`${isAuthenticated ? "/dashboard" : "/public-map"}`}
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
                fontSize: 55,
                marginBottom: 1,
              }}
            ></ArrowCircleRightIcon>
            {/*<div className={"arrow"} ></div>*/}
          </a>
          {/*<div className={"d-flex justify-content-start"}>*/}
          {/*    <p> Staff Member? Log In</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
