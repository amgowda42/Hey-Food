import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, locality, avgRating } =
    resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="p-3 w-[250px] rounded-lg  bg-gray-200 font-serif text-[16px]">
      <img className="rounded-lg" src={RES_IMG_URL + cloudinaryImageId} alt="res-img" />

      <h3 className="font-bold text-lg py-2 ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} min</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
