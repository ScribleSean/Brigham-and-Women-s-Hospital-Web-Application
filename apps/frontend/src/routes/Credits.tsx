import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import styles from '../styles/Dashboard.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Credits() {
    const tools = ['GitHub:' +
    ' GitHub is a tool used by developers that allows for developers to collaborate and work on different portions' +
    'of the same project at the same time. It is very useful for team coding, documentation, and is very easy to integrate ' +
    'into countless development environments.',
        'Node.js is a cross platform runtime environment that allows',
        'Yarn', 'ESLint', 'Prettier', 'JTest', 'Auth0'];
    const libraries = ['React', 'MaterialUI', 'Axios', 'ESLint', 'Express'];
    const frameworks = ['placeholder1', 'placeholder2', 'placeholder3', 'placeholder4', 'placeholder5', 'placeholder6'];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next tool
    const nextTool = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
    };

    // Function to go to the previous tool
    const previousTool = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length);
    };

    const nextLibrary = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % libraries.length);
    };

    const previousLibrary = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + libraries.length) % libraries.length);
    };

    const nextFramework = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % frameworks.length);
    };

    const previousFramework = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + frameworks.length) % frameworks.length);
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
                        backgroundColor: "clear",
                        borderRadius: "10px",
                        width: "200%",
                        padding: "20px",
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "white",
                            textAlign: "center",
                            marginBottom: "14vh",
                            borderRadius: "10px",
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
                            fontSize: 24,
                        }}
                    >
                        <Box sx={{
                            flexBasis: "33%",
                            marginRight: "10px",
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "10px",
                            height: "100%",
                        }}>
                            <h2>Tools</h2>
                            <div>{tools[currentIndex]}</div>
                            <div style={{ marginTop: '20px' }}>
                                <ArrowBackIcon onClick={previousTool}></ArrowBackIcon>
                                <ArrowForwardIcon onClick={nextTool}></ArrowForwardIcon>
                            </div>
                        </Box>
                        <Box sx={{
                            flexBasis: "33%",
                            marginX: "5px",
                            backgroundColor: "white",
                            padding: "1rem",
                            borderRadius: "10px",
                            height: "100%",
                        }}>
                            <h2>Libraries</h2>
                            <div>{libraries[currentIndex]}</div>
                            <div style={{marginTop: '20px'}}>
                                <ArrowBackIcon onClick={previousLibrary}></ArrowBackIcon>
                                <ArrowForwardIcon onClick={nextLibrary}></ArrowForwardIcon>
                            </div>
                        </Box>
                        <Box sx={{
                            flexBasis: "33%",
                            marginLeft: "10px",
                            backgroundColor: "white",
                            borderColor: "#012D5A",
                            borderRadius: "10px",
                            borderThickness: "3px",
                            padding: "1rem",
                            height: "100%",
                        }}>
                            <h2>Frameworks</h2>
                            <div>{frameworks[currentIndex]}</div>
                            <div style={{marginTop: '20px'}}>
                                <ArrowBackIcon onClick={previousFramework}></ArrowBackIcon>
                                <ArrowForwardIcon onClick={nextFramework}></ArrowForwardIcon>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Credits;
