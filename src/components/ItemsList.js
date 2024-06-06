import { RES_IMG_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);

  return (
    <div className="font-serif">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 border-orange-600 text-start flex justify-between items-center"
        >
          <div>
            <div>
              <span className="font-semibold text-base">
                {item?.card?.info?.name}
              </span>
              <br />
              <span className="font-semibold flex items-center justify-start text-base text-red-700">
                Rs.
                {item?.card?.info?.price / 100 || 
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div className="my-2">
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="max-w-32 mx-3  rounded-md border-red-300 border-2">
            <img
              src={RES_IMG_URL + item?.card?.info?.imageId}
              alt="item image"
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
