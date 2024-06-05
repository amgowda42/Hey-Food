import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="font-serif">
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-6 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg text-sky-950">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        <div>
          <ItemsList items={data?.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
