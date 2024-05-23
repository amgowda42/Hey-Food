import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import food_logo from "/assets/food_logo.png";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {}, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={food_logo} className="logo" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
