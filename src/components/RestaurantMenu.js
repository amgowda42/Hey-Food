import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setResMenu(json);
  };
  if (resMenu === null) return <Shimmer />;
  const { name,cuisines } =
    resMenu?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants[4]?.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{}</h3>
    </div>
  );
};

export default RestaurantMenu;
