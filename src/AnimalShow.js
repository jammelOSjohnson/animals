// Import necessary CSS and React hooks
import "./AnimalShow.css";
import React, { useState } from "react";

// Import SVG assets for animals and heart
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

// Map of animal types to their corresponding SVG images
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

// AnimalShow component displays an animal image and a heart that grows on click
const AnimalShow = ({ type }) => {
  // State to track the number of clicks
  const [clicks, setClicks] = useState(0);

  // Handler function to increment clicks on click event
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
      <img src={svgMap[type]} alt="animal" className="animal" />
      <img
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
        className="heart"
      />
    </div>
  );
};

export default AnimalShow;
