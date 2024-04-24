import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import styles from "../styles/Credits.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Credits() {
  const tools = [
    {
      description:
        "GitHub: is a tool used by developers that allows for developers to collaborate and work on different portions" +
        "of the same project at the same time. It is very useful for team coding, documentation, and is very easy to integrate " +
        "into countless development environments. Link: https://github.com/",
      image: "/gitHubLogo.png",
    },
    {
      description:
        "Node.js: is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more." +
        "Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser." +
        "Node.js lets developers use JavaScript to write command line tools and for server-side scripting. Link: https://nodejs.org/en",
      image: "/NodeJSLogo.png",
    },
    {
      description:
        "Yarn: is one of the main JavaScript package managers, developed in 2016 by Sebastian McKenzie of Meta" +
        "for the Node.js JavaScript runtime environment. Link: https://yarnpkg.com/",
      image: "/YarnLogo.png",
    },
    {
      description:
        "Prettier: is a tool to format files in various languages, like TypeScript, JavaScript, CSS, HTML, JSON, and others." +
        "With WebStorm, you can format selected code fragments as well as entire files or directories using the Reformat with" +
        "Prettier action. Link: https://prettier.io/",
      image: "/PrettierLogo.png",
    },
    {
      description:
        "Jtest: is an automated Java software testing and static analysis product developed by Parasoft. The product includes" +
        "technology for data-flow analysis, unit test-case generation and execution, static analysis, and more. Jtest is" +
        "used by companies such as Cisco Systems and TransCore. Link: https://vitest.dev/",
      image: "/VitestLogo.png",
    },
    {
      description:
        "Auth0: provides authentication and authorization as a service. We are here to give developers and companies the" +
        "building blocks they need to secure their applications without having to become security experts. Link: https://auth0.com/",
      image: "/Auth0Logo.png",
    },
    {
      description:
        "Prisma: A database tool used to simplify the database development process by providing automated mitigations " +
        "and mapping layers, as well as a visual data management interface. Link: https://www.prisma.io/",
      image: "/PrismaLogo.png",
    },
  ];

  const libraries = [
    {
      description:
        "React is a free and open-source front-end JavaScript library " +
        "for building user interfaces based on UI components. It is maintained by Meta and a " +
        "community of individual developers and companies. Link: https://react.dev/",
      image: "/ReactLogo.png",
    },
    {
      description:
        "Material UI is an open-source React component library that implements Google's " +
        "Material Design. It's comprehensive and can be used in production out of the box. Link: https://mui.com/material-ui/",
      image: "/MaterialUILogo.png",
    },
    {
      description:
        "Axios is a promise-based HTTP Client for node.js and the browser. It " +
        "is isomorphic, using the native node.js http module on the server-side, and " +
        "XMLHttpRequests on the client. Link: https://axios-http.com/",
      image: "/axiosLogo.png",
    },
  ];
  const frameworks = [
    {
      description:
        "React, a JavaScript library for building user interfaces. Link: https://react.dev/",
      image: "/reactLogo.png",
    },
    {
      description:
        "Express, a back end web application framework for Node.js. Link: https://expressjs.com/",
      image: "/expressLogo.png",
    },
  ];
  const [currentIndexTool, setCurrentIndexTool] = useState(0);
  const [currentIndexLib, setCurrentIndexLib] = useState(0);
  const [currentIndexFrame, setCurrentIndexFrame] = useState(0);

  const nextTool = () => {
    setCurrentIndexTool(
      (prevIndexTools) => (prevIndexTools + 1) % tools.length,
    );
  };

  const previousTool = () => {
    setCurrentIndexTool(
      (prevIndexTools) => (prevIndexTools - 1 + tools.length) % tools.length,
    );
  };

  const nextLibrary = () => {
    setCurrentIndexLib(
      (prevIndexLibs) => (prevIndexLibs + 1) % libraries.length,
    );
  };

  const previousLibrary = () => {
    setCurrentIndexLib(
      (prevIndexLibs) =>
        (prevIndexLibs - 1 + libraries.length) % libraries.length,
    );
  };

  const nextFramework = () => {
    setCurrentIndexFrame(
      (prevIndexFrame) => (prevIndexFrame + 1) % frameworks.length,
    );
  };

  const previousFramework = () => {
    setCurrentIndexFrame(
      (prevIndexFrame) =>
        (prevIndexFrame - 1 + frameworks.length) % frameworks.length,
    );
  };

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
                src={tools[currentIndexTool].image}
                alt="Tool Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{tools[currentIndexTool].description}</div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: 15 }}>
                  Tool {currentIndexTool + 1} of {tools.length}{" "}
                </p>
                <ArrowBackIcon
                  style={{ cursor: "pointer" }}
                  onClick={previousTool}
                ></ArrowBackIcon>
                <ArrowForwardIcon
                  style={{ cursor: "pointer" }}
                  onClick={nextTool}
                ></ArrowForwardIcon>
              </div>
            </Box>
            {/* Libraries Section */}
            <Box
              sx={{
                flexBasis: "33%",
                marginX: "5px",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "10px",
                height: "100%",
                boxShadow: "0px 0px 3px",
                minHeight: "65vh",
                fontColor: "#012d5a",
              }}
            >
              <h2 style={{ fontSize: 35 }}>Libraries</h2>
              <img
                src={libraries[currentIndexLib].image}
                alt="Library Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{libraries[currentIndexLib].description}</div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: 15 }}>
                  Library {currentIndexLib + 1} of {libraries.length}{" "}
                </p>
                <ArrowBackIcon
                  style={{ cursor: "pointer" }}
                  onClick={previousLibrary}
                />
                <ArrowForwardIcon
                  style={{ cursor: "pointer" }}
                  onClick={nextLibrary}
                />
              </div>
            </Box>
            {/* Frameworks Section */}
            <Box
              sx={{
                flexBasis: "33%",
                marginLeft: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "1rem",
                height: "100%",
                boxShadow: "0px 0px 3px",
                minHeight: "65vh",
                fontColor: "#012d5a",
              }}
            >
              <h2 style={{ fontSize: 35 }}>Frameworks</h2>
              <img
                src={frameworks[currentIndexFrame].image}
                alt="Framework Image"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
              <div>{frameworks[currentIndexFrame].description}</div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: 15 }}>
                  Framework {currentIndexFrame + 1} of {frameworks.length}{" "}
                </p>
                <ArrowBackIcon
                  style={{ cursor: "pointer" }}
                  onClick={previousFramework}
                />
                <ArrowForwardIcon
                  style={{ cursor: "pointer" }}
                  onClick={nextFramework}
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Credits;
