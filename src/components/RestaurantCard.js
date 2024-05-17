import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, locality } = resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_IMG_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} min</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
