import React, { useEffect, useState, useRef, useMemo } from "react";
import PlatformerBG from "./PlatformerBG.jsx";
import Disease from "./Disease.jsx";
import JoseSprite from "./JoseSprite.jsx";
import HealthPickup from "./HealthPickup.jsx";
import Shield from "./Shield.jsx";

const Canvas = () => {
  // Define fixed width and height for the canvas
  const canvasWidth = 1500; // Example width
  const canvasHeight = 800; // Example height

  // Calculate viewBox based on fixed width and height
  const viewBox = useMemo(
    () => [-canvasWidth / 2, -canvasHeight / 2, canvasWidth, canvasHeight],
    [canvasWidth, canvasHeight],
  );

  const containerStyle = {
    minWidth: `${canvasWidth}px`,
    minHeight: `${canvasHeight}px`,
    maxWidth: `${canvasWidth}px`,
    maxHeight: `${canvasHeight}px`,
    overflow: "hidden", // Hide any overflow content
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute", // Ensure position context for absolute-positioned elements
    border: "10px solid",
    borderColor: "black",
  };

  const [position, setPosition] = useState({
    x: -25,
    y: 300 - window.innerHeight,
  });

  const [isAlive, setIsAlive] = useState(true);

  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const animationRef = useRef();
  const speed = 400;

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (isAlive) {
      const timer = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isAlive]);

  const [playerHP, setPlayerHP] = useState(3);
  const [playerMaxHP] = useState(3);
  const [playerShields, setPlayerShields] = useState(0);

  const [gameOverDisplayed, setGameOverDisplayed] = useState(false);
  useEffect(() => {
    let gameOverTimer;

    if (!isAlive && !gameOverDisplayed) {
      gameOverTimer = setTimeout(() => {
        setGameOverDisplayed(true);
      }, 3000);
    }

    if (!isAlive && gameOverDisplayed) {
      window.location.href = `/game-over?endTime=${elapsedTime}`;
    }
    return () => clearTimeout(gameOverTimer);
  }, [isAlive, gameOverDisplayed, elapsedTime]);

  const [isShielded, setIsShielded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!event.repeat) {
        const newVelocity = { ...velocity };
        if (event.key) {
          switch (event.key) {
            case "ArrowUp":
            case "w":
            case "W":
              if (newVelocity.y > -speed) {
                newVelocity.y -= speed;
              }
              break;
            case "ArrowDown":
            case "s":
            case "S":
              if (newVelocity.y < speed) {
                newVelocity.y += speed;
              }
              break;
            case "ArrowLeft":
            case "a":
            case "A":
              if (newVelocity.x > -speed) {
                newVelocity.x -= speed;
              }
              break;
            case "ArrowRight":
            case "d":
            case "D":
              if (newVelocity.x < speed) {
                newVelocity.x += speed;
              }
              break;
            case " ": // Spacebar key
              if (playerShields >= 1 && !isShielded) {
                setIsShielded(true); // Set isShielded to true when spacebar is pressed
                setPlayerShields(playerShields - 1);
                setTimeout(() => setIsShielded(false), 1000); // Set isShielded back to false after 1 second
              }
              break;
            default:
              break;
          }
        } else {
          newVelocity.y = 0;
          newVelocity.x = 0;
        }

        setVelocity(newVelocity);
      }
    };

    const handleKeyUp = (event) => {
      const newVelocity = { ...velocity };
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          newVelocity.y = newVelocity.y + speed;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          newVelocity.y = newVelocity.y - speed;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          newVelocity.x = newVelocity.x + speed;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          newVelocity.x = newVelocity.x - speed;
          break;
        default:
          break;
      }
      setVelocity(newVelocity);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const updatePosition = () => {
      setPosition((prevPosition) => {
        const nextX = prevPosition.x + velocity.x / 60;
        const nextY = prevPosition.y + velocity.y / 60;

        const playerWidth = 75;
        const playerHeight = 100;

        const minX = viewBox[0];
        const minY = viewBox[1];
        const maxX = viewBox[0] + viewBox[2] - playerWidth;
        const maxY = viewBox[1] + viewBox[3] - playerHeight;

        const adjustedX = Math.min(Math.max(nextX, minX), maxX);
        const adjustedY = Math.min(Math.max(nextY, minY), maxY);

        return { x: adjustedX, y: adjustedY };
      });
      if (isShielded) {
        // Brighten (whiten) the player image when shielded
        imageRef.current.style.filter = "brightness(300%)";
      } else {
        // Reset player image style when not shielded
        imageRef.current.style.filter = "none";
      }
      if (playerHP <= 0) {
        setPlayerHP(0);
        setIsAlive(false); // Call the setIsAlive function to set isAlive to false
      }

      animationRef.current = requestAnimationFrame(updatePosition);
    };

    animationRef.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    velocity,
    viewBox,
    isShielded,
    setPlayerShields,
    playerShields,
    playerHP,
    setPlayerHP,
  ]);

  const [healthSpawnPoints] = React.useState([]);
  const [shieldSpawnPoints] = React.useState([]);

  const [heartSpawning, setHeartSpawning] = useState(false);
  const [shieldSpawning, setShieldSpawning] = useState(false);

  useEffect(() => {
    const spawnHeart = () => {
      if (!heartSpawning) {
        setHeartSpawning(true);

        const heartWidth = 50;
        const heartHeight = 50;

        const spawnX = Math.random() * (viewBox[2] - heartWidth) + viewBox[0];
        const spawnY = Math.random() * (viewBox[3] - heartHeight) + viewBox[1];

        healthSpawnPoints.push({ x: spawnX, y: spawnY });

        const nextSpawnInterval = Math.random() * 15000 + 10000; // Random interval between 10 and 25 seconds
        spawnIntervalRef.current = setTimeout(() => {
          setHeartSpawning(false);
        }, nextSpawnInterval);
      }
    };

    const spawnNextHeart = () => {
      const nextSpawnInterval = Math.random() * 10000 + 5000; // Random interval between 5 and 15 seconds
      spawnIntervalRef.current = setTimeout(() => {
        spawnHeart();
        spawnNextHeart(); // Schedule the next heart spawn after this one
      }, nextSpawnInterval);
    };

    spawnNextHeart(); // Start the chain of spawning hearts

    return () => clearTimeout(spawnIntervalRef.current);
  }, [viewBox, healthSpawnPoints, heartSpawning]);

  useEffect(() => {
    const spawnShield = () => {
      if (!shieldSpawning) {
        setShieldSpawning(true);

        const shieldWidth = 75;
        const shieldHeight = 40;

        const spawnX = Math.random() * (viewBox[2] - shieldWidth) + viewBox[0];
        const spawnY = Math.random() * (viewBox[3] - shieldHeight) + viewBox[1];

        shieldSpawnPoints.push({ x: spawnX, y: spawnY });

        const nextSpawnInterval = Math.random() * 15000 + 10000; // Random interval between 10 and 25 seconds
        spawnIntervalRef.current = setTimeout(() => {
          setShieldSpawning(false);
        }, nextSpawnInterval);
      }
    };

    const spawnNextShield = () => {
      const nextSpawnInterval = Math.random() * 10000 + 5000; // Random interval between 5 and 15 seconds
      spawnIntervalRef.current = setTimeout(() => {
        spawnShield();
        spawnNextShield(); // Schedule the next shield spawn after this one
      }, nextSpawnInterval);
    };

    spawnNextShield(); // Start the chain of spawning shields

    return () => clearTimeout(spawnIntervalRef.current);
  }, [viewBox, shieldSpawnPoints, shieldSpawning]);

  const [diseases, setDiseases] = useState([]);
  const spawnIntervalRef = useRef(null);

  useEffect(() => {
    const spawnDisease = () => {
      const maybeJose = Math.random();

      const DiseaseComponent = maybeJose <= 0.2 ? JoseSprite : Disease;

      const speed = 3 + elapsedTime / 10 / 2;
      const margin = 50;

      const spawnX =
        Math.random() > 0.5
          ? viewBox[0] - margin
          : viewBox[0] + viewBox[2] + margin;
      const spawnY = Math.random() * viewBox[3] + viewBox[1];

      const dx = viewBox[0] + viewBox[2] / 2 - spawnX;
      const dy = viewBox[1] + viewBox[3] / 2 - spawnY;
      const angleTowardsViewBox = Math.atan2(dy, dx);

      const finalAngle =
        angleTowardsViewBox + (Math.random() - 0.5) * (Math.PI / 4);

      const newDisease = {
        x: spawnX,
        y: spawnY,
        velocityX: Math.cos(finalAngle) * speed,
        velocityY: Math.sin(finalAngle) * speed,
        Component: DiseaseComponent,
      };

      setDiseases((prevDiseases) => [...prevDiseases, newDisease]);

      const nextSpawnInterval = Math.random() * 3000 + 1500;

      spawnIntervalRef.current = setTimeout(spawnDisease, nextSpawnInterval);
    };

    spawnDisease();

    return () => clearTimeout(spawnIntervalRef.current);
  }, [elapsedTime, viewBox]);

  useEffect(() => {
    const moveDiseases = () => {
      setDiseases((prevDiseases) =>
        prevDiseases.map((disease) => ({
          ...disease,
          x: disease.x + disease.velocityX,
          y: disease.y + disease.velocityY,
        })),
      );
    };

    const interval = setInterval(moveDiseases, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  const imageRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    "/playerSoftEngF1.png",
    "/playerSoftEngF2.png",
    "/playerSoftEngF3.png",
  ];

  const toggleFrame = () => {
    setCurrentFrame((prevFrame) => (prevFrame === 0 ? 1 : 0));
  };

  useEffect(() => {
    const frameTimer = setInterval(toggleFrame, 200);

    return () => clearInterval(frameTimer);
  }, []);

  const GameOverText = {
    fontFamily: "'Halogen by Pixel Surplus', sans-serif",
    fontSize: "5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "red",
  };

  const TimerContainer = {
    position: "absolute",
    top: "10px",
    left: "50%",
    zIndex: "999",
  };

  const TimerText = {
    fontFamily: "'Halogen Rough by Pixel Surplus', sans-serif",
    fontSize: "1.5rem",
    color: "black",
    padding: "0.5rem",
    display: "inline-block",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap", // Ensure text stays on a single line
  };

  const HPContainer = {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: "999",
  };

  const HPText = {
    fontFamily: "'Halogen Rough by Pixel Surplus', sans-serif",
    fontSize: "1.5rem",
    color: "white",
    background: "rgba(0, 0, 0, 0.5)",
    padding: "0.5rem",
  };

  const ShieldContainer = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: "999",
  };

  const ShieldText = {
    fontFamily: "'Halogen Rough by Pixel Surplus', sans-serif",
    fontSize: "1.5rem",
    color: "white",
    background: "rgba(0, 0, 0, 0.5)",
    padding: "0.5rem",
  };

  return (
    <div style={containerStyle}>
      <PlatformerBG canvasWidth={canvasWidth} canvasHeight={canvasHeight} />
      <div>
        {!isAlive && (
          <div className="game-over text-center" style={GameOverText}>
            <p>Game Over</p>
          </div>
        )}
        <div style={HPContainer}>
          <div className={"px-3"} style={HPText}>
            <img
              width={40}
              height={40}
              alt="Heart"
              src={"/heart1.png"}
              style={{ marginRight: "25px" }}
            />
            {playerHP}/{playerMaxHP}
          </div>
        </div>
        <div style={ShieldContainer}>
          <div className={"px-3"} style={ShieldText}>
            <img
              width={65}
              height={35}
              alt="Mask"
              src={"/maskSpriteF1.png"}
              style={{ marginRight: "25px" }}
            />{" "}
            {playerShields}
          </div>
        </div>
        <div style={TimerContainer}>
          <div style={TimerText}>Time: {elapsedTime}</div>
        </div>
        <svg
          id="platformer-canvas"
          preserveAspectRatio="xMaxYMax none"
          viewBox={viewBox}
        >
          {isAlive && (
            <g
              ref={imageRef}
              width={75}
              height={100}
              id={"Player"}
              transform={`translate(${position.x}, ${position.y})`}
            >
              <image width={75} height={100} href={frames[currentFrame]} />
            </g>
          )}
          {/* Loop through an array of spawn points to create multiple hearts */}
          {healthSpawnPoints.map((spawnPoint, index) => (
            <HealthPickup
              key={index}
              x={spawnPoint.x}
              y={spawnPoint.y}
              viewBox={viewBox}
              setPlayerHP={setPlayerHP}
              playerHP={playerHP}
              playerMaxHP={playerMaxHP}
              player={document.getElementById("Player")}
              isAlive={isAlive}
            />
          ))}
          {shieldSpawnPoints.map((spawnPoint, index) => (
            <Shield
              key={index}
              x={spawnPoint.x}
              y={spawnPoint.y}
              viewBox={viewBox}
              setPlayerShields={setPlayerShields}
              playerShields={playerShields}
              player={document.getElementById("Player")}
              isAlive={isAlive}
            />
          ))}
          {diseases.map((disease, index) => {
            const DiseaseComponent = disease.Component;
            return (
              <DiseaseComponent
                key={index}
                x={disease.x}
                y={disease.y}
                viewBox={viewBox}
                setPlayerHP={setPlayerHP}
                playerHP={playerHP}
                player={document.getElementById("Player")}
                setIsAlive={setIsAlive}
                isAlive={isAlive}
                isShielded={isShielded}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Canvas;
