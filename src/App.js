import React, { useState } from "react";

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

  //render the results
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
};

export default App;
