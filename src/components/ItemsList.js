import { useDispatch } from "react-redux";
import { RES_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  handleAddItems = (item) => {
    dispatch(addItem(item));
    // console.log(item)
  };
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
            <div className=" ml-9 absolute">
              <button
                className="text-sm bg-white rounded px-2 text-center text-yellow-700"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={RES_IMG_URL + item?.card?.info?.imageId}
              alt="item image"
              className="rounded-md "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
