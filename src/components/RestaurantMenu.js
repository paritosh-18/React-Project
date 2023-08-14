import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/useRestaurantCard";

const RestaurantMenu = () => {
  const { id } = useParams();

  // A custom hook useRestaurant that will return restaurant based on the restaurant id from route url
  const restaurant = useRestaurantCard(id);

  return (
    <div>
      <h1>Restaurant: {restaurant?.name}</h1>
      {typeof restaurant === "undefined" ? (
        <Shimmer />
      ) : (
        <div className="restaurant-page">
          <img
            className="restaurant-image"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
          <div className="restaurant-details">
            <h4 key="cost">Cost: {restaurant?.costForTwoMessage}</h4>
            <h4 key="cuisines">Cuisines: {restaurant?.cuisines.join(", ")}</h4>
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
  );
};

export default RestaurantMenu;
