import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    getRestrauntMenu();
  }, []);

  const { id } = useParams();
  console.log(id);

  async function getRestrauntMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.642684&lng=77.3453639&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  console.log(typeof restaurant === "undefined");
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
