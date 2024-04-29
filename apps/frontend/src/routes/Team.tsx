//Meet the Team
import { Container, Box } from "@mui/material";
import styles from "../styles/Team.module.css";

function Team() {
  const teammates = [
    {
      gamertag: "Sean Arackal",
      teamposition: "Full-Stack Developer" + "WIP plz rm l8r",
      image: "/gitHubLogo.png",
    },
    {
      gamertag: "Maddux Berry",
      teamposition: "Project Manager / Full-Stack Developer" + "WIP plz rm l8r",
      image: "/gitHubLogo.png",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "left",
          marginLeft: "8vw",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            borderRadius: "10px",
            width: "200%",
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
            <h1 style={{ fontSize: 50 }}>Credits</h1>
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
              <h2 style={{ fontSize: 35 }}>Tools</h2>
              <img
                src={teammates[0].image}
                alt="Tool Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{teammates[0].gamertag}</div>
            </Box>
            {/* Libraries Section */}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Team;
