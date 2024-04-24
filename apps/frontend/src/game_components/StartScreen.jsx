import React, { useState, useRef } from "react";

const StartScreen = () => {
  const [hovering, setHovering] = useState(false);

  const startScreenContainer = {
    height: "100vh",
    background:
      "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/backgroundCancerGame.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  const gameTitle = {
    fontFamily: "'Halogen Rough by Pixel Surplus', sans-serif",
    fontSize: "4rem",
    textDecoration: "underline",
  };

  const gameDescription = {
    fontFamily: "'Halogen by Pixel Surplus', sans-serif",
    fontSize: "2rem",
    paddingLeft: "15%",
    paddingRight: "15%",
  };

  const gameInstructionsHeader = {
    fontFamily: "'Halogen by Pixel Surplus', sans-serif",
    fontSize: "2rem",
    paddingLeft: "15%",
    paddingRight: "15%",
    textDecoration: "underline",
  };

  const gameInstructionsBody = {
    fontFamily: "'Halogen by Pixel Surplus', sans-serif",
    fontSize: "2rem",
    paddingLeft: "15%",
    paddingRight: "15%",
  };

  const playButton = {
    fontFamily: "'Halogen by Pixel Surplus', sans-serif",
    fontSize: "3rem",
    backgroundColor: "#012D5A",
    color: "white",
    borderRadius: 0,
    transition: "background-color 0.3s", // Add transition for smooth effect
  };

  const playButtonHover = {
    backgroundColor: "#428fdd", // Background color on hover
  };

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  return (
    <div
      id={"startScreenContainer"}
      style={startScreenContainer}
      className={"container-fluid"}
    >
      <div id={"gameTitle"} style={gameTitle} className={"text-center"}>
        Brigham Breakout!
      </div>
      <div
        id={"gameDescription"}
        style={gameDescription}
        className={"text-center pt-5"}
      >
        Oh No, There's been a contamination leak at Brigham and Women's
        Hospital! See how long you can survive the outbreak of diseases!
      </div>
      <div
        id={"gameInstructionsHeader"}
        style={gameInstructionsHeader}
        className={"text-center pt-5"}
      >
        How To Play:
      </div>
      <div
        id={"gameInstructionsBody"}
        style={gameInstructionsBody}
        className={"text-center pt-5"}
      >
        Use the arrow keys or WASD to move your character around, dodging all
        diseases that fly across the screen. Upon colliding with a disease, you
        will lose one heart. Look out for hearts that appear to refill lost
        health. Survive as long as you can! Your score is your final time.
      </div>
      <div className={"row"}>
        <div className={"col px-5 text-end"}>
          <img
            id="arrowKey"
            ref={imageRef1}
            src={"/arrowKeys.png"}
            alt="Arrow Keys"
            width={225}
            height={202}
          />
        </div>
        <div className={"col px-5 pt-5"}>
          <img
            id="wasd"
            ref={imageRef2}
            src={"/wasd.png"}
            alt="WASD Keys"
            width={225}
            height={150}
          />
        </div>
      </div>
      <div className={"text-center pt-5"}>
        <a
          id="playButton"
          style={{ ...playButton, ...(hovering && playButtonHover) }} // Merge styles based on hovering state
          className={"btn py-4 px-5 shadow-lg"}
          onMouseEnter={() => setHovering(true)} // Set hovering state to true on mouse enter
          onMouseLeave={() => setHovering(false)} // Set hovering state to false on mouse leave
          href={"/brigham-breakout"}
        >
          PLAY
        </a>
      </div>
    </div>
  );
};

export default StartScreen;
