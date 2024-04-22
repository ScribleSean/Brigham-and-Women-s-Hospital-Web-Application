import React, { useEffect, useRef } from "react";

const Carcinoma = ({ x, y, viewBox, player }) => {
    const position = useRef({ x: x, y: y });
    const playerRef = useRef(player);

    useEffect(() => {
        position.current = { x: x, y: y };

        const playerPosition = playerRef.current.getAttribute("cx");
        const playerY = playerRef.current.getAttribute("cy");
        const playerRadius = playerRef.current.getAttribute("r");

        const distance = Math.sqrt(
            (position.current.x - playerPosition) ** 2 +
            (position.current.y - playerY) ** 2
        );

        if (distance < parseInt(playerRadius) + 50) {
            console.log("Collision detected!");
            // Handle the collision here
        }
    }, [x, y, viewBox, player]);

    return (
        <rect
            x={position.current.x}
            y={position.current.y}
            width={100}
            height={80}
            fill="#FF6347"
        />
    );
};

export default Carcinoma;
