import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restuarant, key) => (
          <RestaurantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
