import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import food_logo from "/assets/food_logo.svg";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {}, [btnName]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  return (
    <div className="flex justify-between items-center border-b-4 border-indigo-500 py-1 px-3 font-serif ">
      <div className="w-[105px] ">
        <Link to="/">
          <img src={food_logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-6 text-xl font-serif">
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
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
            className="py-0.5 px-5 bg-gray-500 rounded border-slate-700 text-rose-400"
          >
            {btnName}
          </button>
          <li className="text-sm text-orange-500">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
