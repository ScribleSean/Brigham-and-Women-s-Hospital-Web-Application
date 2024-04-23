import React from "react";
import { Container, Box } from "@mui/material";
import styles from "../styles/Dashboard.module.css";

function Credits() {
    return (
        <div className={`${styles.pageContainer}`}>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    marginLeft: "14vw",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        width: { sm: "100%", md: "80%" },
                        padding: "20px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            marginBottom: "14vh",
                        }}
                    >
                        <h1>Credits</h1>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textAlign: "center",
                            width: "100%",
                            marginBottom: "20px",
                        }}
                    >
                        <Box sx={{ flexBasis: "33%", marginRight: "10px" }}>
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
                        </Box>
                        <Box sx={{
                            flexBasis: "33%",
                            marginX: "5px",
                            
                        }}>
                            <h2>Libraries</h2>
                            <ul>
                                <li>React</li>
                                <li>MaterialUI</li>
                                <li>Axios</li>
                                <li>ESLint</li>
                                <li>Express</li>
                            </ul>
                        </Box>
                        <Box sx={{ flexBasis: "33%", marginLeft: "10px" }}>
                            <h2>Frameworks</h2>
                            <ul>
                                <li>placeholder</li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Credits;
