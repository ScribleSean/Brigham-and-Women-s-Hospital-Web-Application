import React from "react";
import styles from "../styles/About.module.css";
/*import Christian from "../../public/CS3737Photos/Christian.png";
import Ethan from "../../public/CS3737Photos/Ethan.png";
import Gabe from "../../public/CS3737Photos/Gabe.png";
import Gus from "../../public/CS3737Photos/Gus.png";
import Jose from "../../public/CS3737Photos/Jose.png";
import Lorenzo from "../../public/CS3737Photos/Lorenzo.png";
import Maddux from "../../public/CS3737Photos/Maddux.png";
import Peter from "../../public/CS3737Photos/Peter.png";
import Sean from "../../public/CS3737Photos/Sean.png";
import Sophia from "../../public/CS3737Photos/Sophia.png";
import Timothy from "../../public/CS3737Photos/Timothy.png";*/
import { Box, Container } from "@mui/material";
//import { Container, Box } from "@mui/material";

function About() {
  const everyone = [
    {
      gamertag: "Sean Arackal",
      description: "Full-Stack Developer",
      image: "/gitHubLogo.png",
    },
    {
      gamertag: "Maddux Berry",
      description: "Project Manager / Full-Stack Developer",
      image: "/gitHubLogo.png",
    },

    {
      gamertag: "Lorenzo Cassano",
      description: "Full-Stack Developer",
      image: "/gitHubLogo.png",
    },
  ];
  return (
    <div className={styles.pageContainer}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            borderRadius: "10px",
            width: "95%",
            padding: "10px",
            textAlign: "center",
            fontColor: "#F00E0E",
          }}
        >
          <div style={{ fontSize: 16, color: "#F00E0E" }}>
            The Brigham & Women’s Hospital maps and data used in this
            application are copyrighted and provided for the sole use of
            educational purposes.
          </div>
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2vw",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            borderRadius: "10px",
            width: "120%",
            padding: "30px",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "4vh",
              width: "100%",
            }}
          >
            <h1 style={{ fontSize: 50 }}>Meet the Team</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
              width: "100%",
              marginBottom: "20px",
              fontSize: 20,
              fontColor: "#012d5a",
            }}
          >
            <Box
              sx={{
                flexBasis: "33%",
                marginRight: "10px",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "10px",
                height: "100%",
                boxShadow: "0px 0px 3px",
                minHeight: "65vh",
                fontColor: "#012d5a",
              }}
            >
              <img
                src={everyone[0].image}
                alt="Tool Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{everyone[0].gamertag}</div>
              <div>{everyone[0].description}</div>
            </Box>

            <Box
              sx={{
                flexBasis: "33%",
                marginRight: "10px",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "10px",
                height: "100%",
                boxShadow: "0px 0px 3px",
                minHeight: "65vh",
                fontColor: "#012d5a",
              }}
            >
              <img
                src={everyone[1].image}
                alt="Tool Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{everyone[1].gamertag}</div>
              <div>{everyone[1].description}</div>
            </Box>

            <Box
              sx={{
                flexBasis: "33%",
                marginRight: "10px",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "10px",
                height: "100%",
                boxShadow: "0px 0px 3px",
                minHeight: "65vh",
                fontColor: "#012d5a",
              }}
            >
              <img
                src={everyone[2].image}
                alt="Tool Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{everyone[2].gamertag}</div>
              <div>{everyone[2].description}</div>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );

  {
    /*
        <div className={`${styles.commonInputsContainer}`}>
      <div className={`${styles.imageArea}`}>
        <div className={`${styles.gradient} ${styles.row}`}>

          <div
            className={"col-12"}
            style={{ height: "100%", paddingLeft: "5%" }}
          >
            <div className={`${styles.heroText}`}>
              <p>About Us</p>
            </div>
            <div className={`${styles.thanksP}`}>
              <p>Special thanks to Brigham and Women’s Hospital</p>
              <p>and their representative, Andrew Shinn</p>
            </div>
            <div
              className={`${styles.carousel} ${styles.heroTextP}`}
              style={{ display: "flex" }}
            >
              <div>
                <img src={Sean} alt="Sean" style={{ height: "30vh" }} />
                <p>Sean Arackal</p>
                <p>Back-End Dev</p>
              </div>
              <div style={{ transform: "translateX(100%)" }}>
                <img src={Maddux} alt="Maddux" style={{ height: "30vh" }} />
                <p>Maddux Berry</p>
                <p>Project Manager / Front-End Dev</p>
              </div>
              <div style={{ transform: "translateX(200%)" }}>
                <img src={Lorenzo} alt="Lorenzo" style={{ height: "30vh" }} />
                <p>Lorenzo Cassano</p>
                <p>Back-End Dev</p>
              </div>
              <div style={{ transform: "translateX(300%)" }}>
                <img src={Peter} alt="Peter" style={{ height: "30vh" }} />
                <p>Peter Czepiel</p>
                <p>Front-End Dev</p>
              </div>
              <div style={{ transform: "translateX(400%)" }}>
                <img
                  src={Christian}
                  alt="Christian"
                  style={{ height: "30vh" }}
                />
                <p>Christian Consiglio</p>
                <p>Lead Software Engineer (Front-End)</p>
              </div>
              <div style={{ transform: "translateX(500%)" }}>
                <img src={Ethan} alt="Ethan" style={{ height: "30vh" }} />
                <p>Ethan Glasby</p>
                <p>Product Owner / Front-End Dev</p>
              </div>
              <div style={{ transform: "translateX(600%)" }}>
                <img src={Timothy} alt="Timothy" style={{ height: "30vh" }} />
                <p>Timothy Hutzley</p>
                <p>Scrum Master / Front-End Dev</p>
              </div>
              <div style={{ transform: "translateX(700%)" }}>
                <img src={Jose} alt="Jose" style={{ height: "30vh" }} />
                <p>José Manuel Pérez Jiménez</p>
                <p>Assistant Lead Software Engineer (Algorithms)</p>
              </div>
              <div style={{ transform: "translateX(800%)" }}>
                <img src={Gus} alt="Gustave" style={{ height: "30vh" }} />
                <p>Gustave Montana</p>
                <p>Front-End Dev</p>
              </div>
              <div style={{ transform: "translateX(900%)" }}>
                <img src={Gabe} alt="Gabriel" style={{ height: "30vh" }} />
                <p>Gabriel Olafsson</p>
                <p>Assistant Lead Software Engineer (Back-End)</p>
              </div>
              <div style={{ transform: "translateX(1000%)" }}>
                <img src={Sophia} alt="Sofia" style={{ height: "30vh" }} />
                <p>Sofia Xie</p>
                <p>Document Analyst / Front-End Dev</p>
              </div>
            </div>
            <div className={`${styles.wpiCsP}`}>
              <p>WPI Computer Science Department</p>
              <p>CS3733-D24 Software Engineering</p>
              <p>Prof. Wilson Wong</p>
              <p>Team Coach Joseph Cardarelli</p>
            </div>
            <div className={`${styles.disclosureP}`}>
              <p>
                The Brigham & Women’s Hospital maps and data used in this
                application are copyrighted and provided for the sole use of
                educational purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    */
  }
}

export default About;
