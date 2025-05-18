import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

//generates a random animal and returns the animal array
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  //declare animal state
  const [animals, setAnimals] = useState([]);

  //change animal state when button is clicked
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  //render the array of animals
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  //render the results
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderAnimals}</div>
    </div>
  );
};

export default App;
