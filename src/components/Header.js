import { useState } from "react";

import food_logo from "/assets/food_logo.png";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={food_logo} className="logo" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
