import React from "react";
import Slider from "react-slick";

const CharCarrusel = ({ getCharacter }) => {
  const character = getCharacter();
  console.log(character);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
          <img src={character.frames[0]} alt={character.name} />
        </div>
        <div className="">
          {/* Display the character frame or other details */}
          <p className={""}>{character.name}</p>
          <img src={character.frames[0]} alt={character.name} />
        </div>
        <div className="">
          {/* Display the character stats */}
          <p className={""}>{character.speed}</p>
        </div>
        <div className="">
          <img src={character.frames[0]} alt={character.name} />
        </div>
      </Slider>
    </div>
  );
};

export default CharCarrusel;
