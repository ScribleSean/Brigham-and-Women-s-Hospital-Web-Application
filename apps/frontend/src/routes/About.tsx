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
              <p>Sean Arackal</p>
              <p>Back-End Dev</p>
            </div>
            <div style={{ transform: "translateX(100%)" }}>
              <p>Maddux Berry</p>
              <p>Project Manager / Front-End Dev</p>
            </div>
            <div style={{ transform: "translateX(200%)" }}>
              <p>Lorenzo Cassano</p>
              <p>Back-End Dev</p>
            </div>
            <div style={{ transform: "translateX(300%)" }}>
              <p>Peter Czepiel</p>
              <p>Front-End Dev</p>
            </div>
            <div style={{ transform: "translateX(400%)" }}>
              <p>Christian Consiglio</p>
              <p>Lead Software Engineer (Front-End)</p>
            </div>
            <div style={{ transform: "translateX(500%)" }}>
              <p>Ethan Glasby</p>
              <p>Product Owner / Front-End Dev</p>
            </div>
            <div style={{ transform: "translateX(600%)" }}>
              <p>Timothy Hutzley</p>
              <p>Scrum Master / Front-End Dev</p>
            </div>
            <div style={{ transform: "translateX(700%)" }}>
              <p>José Manuel Pérez Jiménez</p>
              <p>Assistant Lead Software Engineer (Algorithms)</p>
            </div>
            <div style={{ transform: "translateX(800%)" }}>
              <p>Gustave Montana</p>
              <p>Front-End Dev</p>
            </div>
            <div style={{ transform: "translateX(900%)" }}>
              <p>Gabriel Olafsson</p>
              <p>Assistant Lead Software Engineer (Back-End)</p>
            </div>
            <div style={{ transform: "translateX(1000%)" }}>
              <p>Sofia Xie</p>
              <p>Document Analyst / Front-End Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
