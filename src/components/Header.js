import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import food_logo from "/assets/food_logo.png";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {}, [btnName]);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={food_logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus === false ? "🔴" : "✅"}</li>
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
