import { useDispatch } from "react-redux";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuDetails = (props) => {
  const id = props.id;
  const menuCards = useRestaurantMenu(id);
  {
    typeof menuCards === "undefined" ? <></> : menuCards.shift();
  }

  return (
    <div>
      {typeof menuCards === "undefined" ? (
        <Shimmer />
      ) : (
        <div>
          {menuCards.map((menu) => {
            return (
              <MenuFragment
                title={menu?.card?.card?.title}
                itemCards={menu?.card?.card?.itemCards}
                key={menu?.card?.card?.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
const MenuFragment = ({ title, itemCards }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      {typeof itemCards === "undefined" ? (
        <></>
      ) : (
        <>
          {itemCards.map((item) => {
            return (
              <div className="flex">
                <h1 className="m-1 p-1">{item?.card?.info?.name}</h1>
                <button
                  className="bg-green-50 rounded-xl m-1 p-1"
                  onClick={() => handleAdd(item)}
                >
                  +
                </button>
                <button
                  className="bg-green-50 rounded-xl m-1 p-1"
                  onClick={() => handleDelete(item)}
                >
                  -
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MenuDetails;
