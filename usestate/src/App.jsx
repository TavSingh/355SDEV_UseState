import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
// Importing useState
import { useState } from "react";
import "./App.css";


function App() {
  // Destructuring and saving a shallow copy using the spread operator
  // useState returns an array with two elements: the first is the current state, and the second is the function used to update that state
  const [restaurantState, setRestaurants] = useState([...restaurants]);
  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
