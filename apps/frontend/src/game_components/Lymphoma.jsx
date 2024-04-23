// Leukemia.jsx
import React, { useEffect, useRef } from "react";

const Leukemia = ({ x, y, viewBox, player, setIsAlive }) => {
    const position = useRef({ x: x, y: y });
    const playerRef = useRef(player);
    const imageRef = useRef(null);

    useEffect(() => {
        position.current = { x: x, y: y };

        const playerRect = playerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();
        imageRect.width *= 0.8;
        imageRect.height *= 0.8;

        if (isIntersecting(playerRect, imageRect)) {
            console.log("Collision detected!");
            setIsAlive(false); // Call the setIsAlive function to set isAlive to false

        }
    }, [x, y, viewBox, player, setIsAlive]);

    return (
        <image
            ref={imageRef}
            x={position.current.x}
            y={position.current.y}
            width={70}
            height={70}
            href={"/pinkDisease.png"}
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

export default Leukemia;
