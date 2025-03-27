import { useDispatch, useSelector } from "react-redux";
import ItemsList from "../components/ItemsList";
import { cartClear, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  handleCartClear = () => {
    dispatch(cartClear());
  };
  handleRemoveClear = () => {
    dispatch(removeItem());
  };
  return (
    <div className="flex flex-col justify-center items-center w-5/12 mx-auto my-6">
      <h1 className="font-bold text-lime-500 text-2xl">Cart</h1>
      <div className="flex gap-10 my-5">
        <button
          className="bg-red-700 text-white py-1 px-6 rounded-md text-xl"
          onClick={handleCartClear}
        >
          Clear
        </button>
        <button
          className="bg-amber-600 text-white py-1 px-4 rounded-md text-xl"
          onClick={handleRemoveClear}
        >
          Remove
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1>Your Cart Is emty Add Some Food to Cart</h1>
      )}
      <ItemsList items={cartItems} />
    </div>
  );
};
export default Cart;
