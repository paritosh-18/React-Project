import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div>
      <div className="flex">
        {cartItems.map((item) => {
          return (
            <div className="w-48 m-2 p-2 bg-gray-50 shadow-md">
              <img
                className="w-44"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
              />
              <h1 className="text-lg font-semibold">
                {item?.card?.info?.name}
              </h1>
              <h1 className="text-xs">{item?.card?.info?.description}</h1>
              <h1>
                {"Rs. " +
                  (item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100)}
              </h1>
            </div>
          );
        })}
      </div>
      <button
        className="bg-purple-200 m-2 p-2 rounded-xl hover:bg-purple-300"
        onClick={() => handleClear()}
      >
        Clear Cart
      </button>
      <h1>
        Total:
        {cartItems.reduce((acc, item) => {
          return (
            acc +
            (item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100)
          );
        }, 0)}
      </h1>
    </div>
  );
};

export default Cart;
