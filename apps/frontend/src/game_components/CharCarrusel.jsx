import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CharCarruselChunk from "./CharCarruselChunk.jsx";
import { allCharacters } from "./Characters";

const CharCarrusel = ({ currentIndex, getCharacter }) => {
  const sliderRef = useRef(null);
  const character = getCharacter();

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex, sliderRef, character]);

  const settings = {
    dots: false,
    arrows: false,
    draggable: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings} ref={sliderRef}>
        {allCharacters.map((character, index) => (
          <CharCarruselChunk character={character} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default CharCarrusel;
