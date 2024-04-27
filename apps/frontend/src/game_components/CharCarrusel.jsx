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
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <div
      style={{
        width: "100%",
        marginLeft: "0",
        marginRight: "0",
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      <Slider {...settings} ref={sliderRef}>
        {allCharacters.map((character, index) => (
          <CharCarruselChunk character={character} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default CharCarrusel;
