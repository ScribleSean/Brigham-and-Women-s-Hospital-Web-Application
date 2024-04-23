import React, { useEffect, useRef } from "react";

const Carcinoma = ({ x, y, viewBox, player }) => {
    const position = useRef({ x: x, y: y });
    const playerRef = useRef(player);
    const rectRef = useRef(null);

    useEffect(() => {
        position.current = { x: x, y: y };

        const playerBBox = playerRef.current.getBBox();
        const rectBBox = rectRef.current.getBBox();

        if (isIntersecting(playerBBox, rectBBox)) {
            console.log("Collision detected!");
            const playerRadius = playerRef.current.getAttribute("r");
            playerRef.current.setAttribute("r", parseInt(playerRadius) - 50);
        }
    }, [x, y, viewBox, player]);

    return (
        <rect
            ref={rectRef}
            x={position.current.x}
            y={position.current.y}
            width={100}
            height={80}
            fill="#FF6347"
        />
    );
};

function isIntersecting(a, b) {
    return (
        a.x <= b.x + b.width &&
        a.x + a.width >= b.x &&
        a.y <= b.y + b.height &&
        a.y + a.height >= b.y
    );
}

export default Carcinoma;
