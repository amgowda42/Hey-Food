import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const RestaurantCardOpen = withIsOpenLabel(RestaurantCard);

const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState([]);
  const [filteredRestuarant, setfilteredRestuarant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log(listOfRestuarant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setListOfRestuarant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestuarant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) return <h1>You are on the offline</h1>;

  return listOfRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="font-serif text-base">
      <div className="flex items-center justify-center">
        <div>
          <button
            className="px-3 py-1 bg-gray-200"
            onClick={() => {
              const filteredList = listOfRestuarant.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setfilteredRestuarant(filteredList);
            }}
          >
            Top restaurants
          </button>
        </div>

        <div className="mx-6 my-6 px-6 py-1 text-center">
          <input
            className="p-1 border-2 border-red-400 rounded-sm text-center"
            type="text"
            placeholder="search here"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-200 px-6 py-1 font-semibold ml-4 rounded-md "
            onClick={() => {
              const filteredRestuarant = listOfRestuarant.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              ); //));
              setfilteredRestuarant(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label>User Name: </label>
          <input
            className="p-1 border-2 border-red-400 rounded-sm text-center"
            placeholder="Login"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-y-16 gap-x-14 justify-center ">
        {filteredRestuarant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
