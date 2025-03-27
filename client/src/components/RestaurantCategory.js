import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setshowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="font-serif">
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-6 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-xl text-green-500">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItems && <ItemsList items={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
