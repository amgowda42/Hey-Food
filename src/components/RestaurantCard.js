import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, locality, avgRating } =
    resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="p-3 w-[250px] h-[450px] rounded-lg  bg-gray-200 font-serif text-[16px]">
      <img
        className="rounded-lg w-full  h-[200px]"
        src={RES_IMG_URL + cloudinaryImageId}
        alt="res-img"
      />

      <h3 className="font-bold text-lg py-2  ">{name}</h3>
      <h4 className="text-[16px]">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} min</h4>
      <h4 className="text-amber-500 text-base">{locality.toUpperCase()}</h4>
    </div>
  );
};

export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-3">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
