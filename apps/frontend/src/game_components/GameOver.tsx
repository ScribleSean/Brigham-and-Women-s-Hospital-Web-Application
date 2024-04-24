import React, { useEffect, useState } from "react";
import { breakoutHighScore } from "common/src/backend_interfaces/breakoutHighScore.js";
import axios from "axios";
import { Button, TextField } from "@mui/material";

const GameOver = () => {
  const gameOverContainer: React.CSSProperties = {
    height: "100vh",
    background:
      "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/backgroundCancerGame.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  const highScoreContainer: React.CSSProperties = {
    background: "",
    color: "white",
    height: "90vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const [formData, setFormData] = useState<breakoutHighScore>({
    HSID: 0,
    initial: "",
    time: "",
  });
  const [highScores, setHighScores] = useState<breakoutHighScore[]>([]);
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("/api/brig-hs-request");
        const highscores = response.data;
        setHighScores(highscores);
      } catch (error) {
        console.error("Failed to fetch leaderboard", error);
      }
    };
    fetchLocations();
  }, []);

  console.log(highScores);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      HSID: 0,
      initial: "",
      time: "",
    });
  };

  const handleSubmit = async () => {
    //e.preventDefault();
    try {
      const response = await axios.post("/api/brig-hs-request", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Unable to create form");
      console.log(error);
    }
    resetForm();
  };

  return (
    <div
      id={"gameOverContainer"}
      style={gameOverContainer}
      className={"container-fluid"}
    >
      <div
        id={"highScoreContainer"}
        className={"container"}
        style={highScoreContainer}
      >
        HIGHSCORE
        <form onSubmit={handleSubmit}>
          <TextField
            id={"initial"}
            variant={"filled"}
            label={"Your Initials"}
            required
            value={formData.initial}
            onChange={handleTextFieldChange}
          />
          <TextField
            id={"time"}
            variant={"filled"}
            label={"Playtime"}
            required
            value={formData.time}
            onChange={handleTextFieldChange}
          />
          <Button type={"submit"}>Click</Button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Initials</th>
              <th>Playtime</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((score, index) => (
              <tr key={index}>
                <td>{score.initial}</td>
                <td>{score.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameOver;
