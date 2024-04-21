import React from "react";
import { Container, Typography, Box, Grid } from '@mui/material';

const Credits: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={0} alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={6}>
                    {/* Left side content */}
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography variant="h4" gutterBottom>
                            Libraries
                        </Typography>
                        <Typography variant="body1">
                            This project uses the following libraries:
                        </Typography>
                        <ul>
                            <li>React with TypeScript</li>
                            <li>Material-UI</li>
                            <li>Axios</li>
                            <li>Express</li>
                            <li>ESLint</li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Right side content */}
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography variant="h4" gutterBottom>
                            Tools
                        </Typography>
                        <Typography variant="body1">
                            Tools used by the development team:
                        </Typography>
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default Credits;
