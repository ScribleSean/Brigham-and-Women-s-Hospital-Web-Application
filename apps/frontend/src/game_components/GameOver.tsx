import React, { useEffect, useState } from "react";
import { breakoutHighScore } from "common/src/backend_interfaces/breakoutHighScore.js";
import axios from "axios";
import { Button, Tabs, Tab, TextField, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "../styles/brighamBreakout.module.css";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const GameOver = () => {
  // const [hovering, setHovering] = useState(false);
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const endTime: string | null = params.get("endTime");

  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const gameOverContainer: React.CSSProperties = {
    height: "100vh",
    background:
      "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/backgroundCancerGame.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  const highScoreContainer: React.CSSProperties = {
    backgroundColor: "black",
    opacity: ".8",
    color: "white",
    height: "90vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const leaveButton = {
    fontFamily: "'Halogen by Pixel Surplus', sans-serif",
    fontSize: "3rem",
    justifyContent: "space-around",
    borderRadius: 0,
    transition: "background-color 0.3s", // Add transition for smooth effect
  };
  //
  // const leaveButtonHover = {
  //     backgroundColor: "#428fdd", // Background color on hover
  // };

  const [formData, setFormData] = useState<breakoutHighScore>({
    HSID: 0,
    initial: "",
    time: endTime ? endTime : "",
    character: "",
  });
  const [highScores, setHighScores] = useState<breakoutHighScore[]>([]);
  const [recentScores, setRecentScores] = useState<breakoutHighScore[]>([]);

  const fetchTop = async () => {
    try {
      const response = await axios.get("/api/hs-all-time");
      const highscores = response.data;

      while (highscores.length < 20) {
        highscores.push({ HSID: -1, initial: ". . . .", time: "" });
      }

      const send = response.data;

      setHighScores(send);
    } catch (error) {
      console.log("ERROR");
    }
  };

  const fetchRecent = async () => {
    try {
      const response = await axios.get("/api/hs-today");
      const highscores = response.data;

      while (highscores.length < 20) {
        highscores.push({ HSID: -1, initial: ". . . .", time: "" });
      }

      const send = response.data;

      setRecentScores(send);
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    fetchTop();
    fetchRecent();
  }, []);

  console.log(highScores);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "initial" && e.target.value.length > 3) {
      return;
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      HSID: 0,
      initial: "",
      time: endTime ? endTime : "",
      character: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/brig-hs-request", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Unable to create form");
      console.log(error);
    }
    resetForm();
    setSubmitted(true);
  };

  return (
    <>
      <div
        id={"gameOverContainer"}
        style={gameOverContainer}
        className={"container-fluid"}
      >
        <div
          id={"highScoreContainer"}
          className={`container px-0 ${styles.highScoreTable}`}
          style={highScoreContainer}
        >
          {!submitted ? (
            <>
              <form onSubmit={handleSubmit}>
                <div>End Time: {endTime}</div>
                <TextField
                  id={"initial"}
                  variant={"filled"}
                  label={"Your Initials"}
                  required
                  value={formData.initial}
                  onChange={handleTextFieldChange}
                  InputProps={{
                    style: {
                      backgroundColor: "white",
                    },
                  }}
                />

                <Button type={"submit"}>Click</Button>
              </form>
            </>
          ) : (
            <>
              <Tabs
                value={value}
                onChange={handleChange}
                variant={"fullWidth"}
                className={""}
                TabIndicatorProps={{ style: { display: "none" } }}
              >
                <Tab
                  label="All Time High Scores"
                  style={{
                    color: `rgba(255, 255, 255, ${value === 0 ? 1 : 0.6})`,
                    borderRight: value === 0 ? "" : "5px solid #39ff14",
                    borderBottom: value === 0 ? "" : "5px solid #39ff14",
                    borderBottomRightRadius: value === 0 ? "0px" : "10px",
                    borderTopLeftRadius: "10px",
                    fontFamily: '"Halogen by Pixel Surplus", sans-serif',
                    fontSize: "24px",
                    width: "100%",
                  }}
                />
                <Tab
                  label="Today's High Scores"
                  style={{
                    color: `rgba(255, 255, 255, ${value === 1 ? 1 : 0.6})`,
                    borderBottomColor: value === 1 ? "green" : "transparent",
                    borderBottomLeftRadius: value === 1 ? "0px" : "10px",
                    borderTopRightRadius: "10px",
                    borderLeft: value === 1 ? "" : "5px solid #39ff14",
                    borderBottom: value === 1 ? "" : "5px solid #39ff14",
                    fontFamily: '"Halogen by Pixel Surplus", sans-serif',
                    fontSize: "24px",
                  }}
                />
              </Tabs>
              <div>
                <CustomTabPanel value={value} index={0}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingTop: "5rem",
                      paddingRight: "2rem",
                      paddingLeft: "2rem",
                    }}
                  >
                    <div>
                      <table>
                        <tbody>
                          {highScores.slice(0, 10).map((score, index) => (
                            <tr key={index}>
                              <td className={styles.highScoreTableInitials}>
                                {index + 1} .{" "}
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                {score.initial}{" "}
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                . . .
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableChar}>
                                {score.character
                                  ? score.character
                                  : ". . . . ."}
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                . . . .
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                {score.time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {highScores.length > 10 && (
                      <div>
                        <table>
                          <tbody>
                            {highScores.slice(10, 20).map((score, index) => (
                              <tr key={index}>
                                <td className={styles.highScoreTableInitials}>
                                  {index + 11} .{" "}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  {score.initial}{" "}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  . . .
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableChar}>
                                  {score.character
                                    ? score.character
                                    : ". . . . ."}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  . . . .
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  {score.time}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingTop: "5rem",
                      paddingRight: "2rem",
                      paddingLeft: "2rem",
                    }}
                  >
                    <div>
                      <table>
                        <tbody>
                          {recentScores.slice(0, 10).map((score, index) => (
                            <tr key={index}>
                              <td className={styles.highScoreTableInitials}>
                                {index + 1} .{" "}
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                {score.initial}{" "}
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                . . .
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableChar}>
                                {score.character
                                  ? score.character
                                  : ". . . . ."}
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                . . . .
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className={styles.highScoreTableInitials}>
                                {score.time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {recentScores.length > 10 && (
                      <div>
                        <table>
                          <tbody>
                            {recentScores.slice(10, 20).map((score, index) => (
                              <tr key={index}>
                                <td className={styles.highScoreTableInitials}>
                                  {index + 11} .{" "}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  {score.initial}{" "}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  . . .
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableChar}>
                                  {score.character
                                    ? score.character
                                    : ". . . . ."}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  . . . .
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className={styles.highScoreTableInitials}>
                                  {score.time}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </CustomTabPanel>
              </div>

              <div className={styles.buttons}>
                <a
                  id="leave"
                  style={{ ...leaveButton }} // Merge styles based on hovering state
                  className={`btn py-4 px-5 shadow-lg ${styles.backToMap}`}
                  href={"/public-map"}
                >
                  BACK TO MAP
                </a>
                <a
                  id="restart"
                  style={{ ...leaveButton }} // Merge styles based on hovering state
                  className={`btn py-4 px-5 shadow-lg ${styles.tryAgain}`}
                  href={"/brigham-breakout"}
                >
                  TRY AGAIN
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GameOver;
