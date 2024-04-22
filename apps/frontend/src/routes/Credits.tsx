import React from "react";
import { Container, Box  } from '@mui/material';
import "../styles/Credits.module.css";


const Credits: React.FC = () => {
    return (
        <Container sx={{
            paddingTop: "80px",
        }}>
            <Box sx={{
                textAlign: "center",
            }}>
                <h1>Credits</h1>
            </Box>
            <Box sx={{
                display: "flex",
                textAlign: "left",
            }}>
                <div>
                    <h2>Libraries</h2>
                </div>
                <div>
                    <ul>
                        <li>React</li>
                        <li>MaterialUI</li>
                        <li>Axios</li>
                        <li>ESLint</li>
                        <li>Express</li>
                    </ul>
                </div>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "right",
            }}>
                <div>
                    <h2> Tools </h2>
                </div>
                <div>
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
        </Container>

    );
}
    ;

    export default Credits;
