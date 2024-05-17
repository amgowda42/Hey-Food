import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestuarant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestuarant(filteredList);
          }}
        >
          Top restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
