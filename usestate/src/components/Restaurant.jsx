import { useState } from "react";

function Restaurant(props) {
  // Setting the current state and updated state as constants and will change using useState
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  // Function that will alternate from the opposite of the previous state;
  // true -> false
  // false -> true
  const handleHours = () => {
    setHours((prev) => !prev);
  }
  // Same thing for the menu
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      {/*Using onClick event to change the states*/}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {/* Conditionally rendering information based on the useState for both the hours and menu */}
      {/* If either menu or hours are set to true, it will display the respective information */}
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
