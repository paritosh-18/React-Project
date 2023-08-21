import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/useRestaurantCard";
import MenuDetails from "./MenuDetails";

const RestaurantMenu = () => {
  const { id } = useParams();

  // A custom hook useRestaurant that will return restaurant based on the restaurant id from route url
  const restaurant = useRestaurantCard(id);

  return (
    <div>
      <h1 className="font-bold text-xl">{restaurant?.name}</h1>
      <div className="flex">
        <div>
          {typeof restaurant === "undefined" ? (
            <Shimmer />
          ) : (
            <div className="flex">
              <img
                className="w-96 m-2 p-2 shadow-lg"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              />
              <div className="m-2 p-2 border-2 shadow-md max-w-prose font-semibold">
                <h4 key="cost">Cost: {restaurant?.costForTwoMessage}</h4>
                <h4 key="cuisines">
                  Cuisines: {restaurant?.cuisines.join(", ")}
                </h4>
                <h4 key="avgRating">
                  Average Rating: {restaurant?.avgRating} stars
                </h4>
                <h4 key="totalRating">
                  Total Ratings: {restaurant?.totalRatingsString}
                </h4>
                <h4 key="areaName">Area: {restaurant?.areaName}</h4>
                <h4 key="isOpen">
                  Open for ordering: {restaurant?.isOpen ? "Yes" : "No"}
                </h4>
              </div>
            </div>
          )}
        </div>
        <div>
          <MenuDetails id={id} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
