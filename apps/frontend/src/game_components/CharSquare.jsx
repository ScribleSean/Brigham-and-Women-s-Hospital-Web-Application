import React from "react";

const CharSquare = ({ character, isActive, onClick }) => {
    const style = {
        cursor: 'pointer',
        border: isActive ? "2px solid blue" : "1px solid grey", // Highlight if active
        padding: "10px",
        margin: "5px",
        display: "inline-block",
        backgroundImage: `url(${character.frames[0]})`,
        backgroundSize: "cover",
        width: "100px",
        height: "100px"
    };

    return (
        <div style={style} onClick={onClick}>
            {/* Optionally show character name or other details */}
        </div>
    );
};

export default CharSquare;
