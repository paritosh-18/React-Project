import { useState, useEffect } from "react";

const useRestaurantCard = (id) => {
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    getRestrauntMenu();
  }, []);

  async function getRestrauntMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.642684&lng=77.3453639&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;
};

export default useRestaurantCard;
