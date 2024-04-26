import React, { useEffect, useRef, useState, useMemo } from "react";

const Disease = ({
  x,
  y,
  viewBox,
  player,
  setIsAlive,
  isAlive,
  playerHP,
  setPlayerHP,
}) => {
  const position = useRef({ x: x, y: y });
  const playerRef = useRef(player);
  const imageRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [randDisease, setRandDisease] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showDisease, setShowDisease] = useState(true);

  const diseaseData = useMemo(
    () => [
      { width: 160, height: 160, color: "red" },
      { width: 65, height: 65, color: "blue" },
      { width: 70, height: 70, color: "pink" },
      { width: 65, height: 65, color: "green" },
    ],
    [],
  );

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * diseaseData.length);
    const randomDisease = diseaseData[randomIndex];
    setRandDisease(randomDisease);
  }, [diseaseData]);

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % 2); // Cycle between frames 0 and 1
    }, 200); // Switch frames every 200 milliseconds

    return () => clearInterval(frameTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
      if (showDisease && isAlive) {
          position.current = { x: x, y: y };

          const playerRect = playerRef.current.getBoundingClientRect();
          const imageRect = imageRef.current.getBoundingClientRect();
          playerRect.width *= 0.7;
          playerRect.height *= 0.7;
          imageRect.width *= 0.8;
          imageRect.height *= 0.8;

          if (isIntersecting(playerRect, imageRect)) {
            console.log("Collision detected!");
            //setPlayerHP(playerHP - 1);
            if (playerHP <= 1) {
              setIsAlive(false); // Call the setIsAlive function to set isAlive to false
            }
            setShowDisease(false);
          }

          // Hide the disease after 3 seconds
          if (elapsedTime >= 20) {
            setShowDisease(false);
          }
    }
  }, [
    x,
    y,
    viewBox,
    player,
    setIsAlive,
    elapsedTime,
    showDisease,
    isAlive,
    playerHP,
    setPlayerHP,
  ]);

  const imageSrc = `/${randDisease?.color}Disease${currentFrame + 1}.png`;

  return (
    <>
      {showDisease && isAlive && (
        <image
          ref={imageRef}
          x={position.current.x}
          y={position.current.y}
          width={randDisease?.width}
          height={randDisease?.height}
          href={imageSrc}
        />
      )}
    </>
  );
};

function isIntersecting(a, b) {
  return (
    a.x <= b.x + b.width &&
    a.x + a.width >= b.x &&
    a.y <= b.y + b.height &&
    a.y + a.height >= b.y
  );
}

export default Disease;
