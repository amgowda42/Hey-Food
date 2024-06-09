import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { cartClear } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  handleCartClear = () => {
    dispatch(cartClear());
  };
  return (
    <div className="flex flex-col justify-center items-center w-5/12 mx-auto">
      <h1 className="font-bold text-lime-500 text-2xl">Cart</h1>
      <button
        className="bg-slate-950 text-white py-1 px-3 "
        onClick={handleCartClear}
      >
        Clear
      </button>
      {cartItems.length === 0 && <h1>Your Cart Is emty Add Some Food to Cart</h1>}
      <ItemsList items={cartItems} />
    </div>
  );
};
export default Cart;
