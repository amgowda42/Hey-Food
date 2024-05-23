import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  };
  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Megana Foods</h1>
      <h2>Biriyani</h2>
      <h3>Chicken Masala</h3>
    </div>
  );
};

export default RestaurantMenu;
