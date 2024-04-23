import React from "react";
import { Container, Box } from "@mui/material";

function About() {
  return (
    <Container
      sx={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: { sm: "80%", md: "60%" },
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1>Credits</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <div>
            <h2>Libraries</h2>
            <ul>
              <li>React</li>
              <li>MaterialUI</li>
              <li>Axios</li>
              <li>ESLint</li>
              <li>Express</li>
            </ul>
          </div>
          <div>
            <h2>Tools</h2>
            <ul>
              <li>GitHub</li>
              <li>Node.js</li>
              <li>Yarn</li>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>JTest</li>
              <li>Auth0</li>
            </ul>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
