import React from "react";
import "../styles/About.css";
//import { Container, Box } from "@mui/material";

function About() {
  return (
    <div className={"image-area"}>
      <div className={"gradient row"}>
        <div className={"col-12"}>
          <div className={"hero-text"}>About Us</div>
          <div className="carousel hero-text-p">
            <div>
              <p>Yoooo</p>
            </div>
            <div style={{ transform: "translateX(100%)" }}>
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
      </div>
    </div>
  );
}

export default About;
