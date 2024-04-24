import React from "react";

const PlatformerBG = () => {
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundImage: "url('/backgroundCancerGame.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return <div style={containerStyle}></div>;
};

export default PlatformerBG;
