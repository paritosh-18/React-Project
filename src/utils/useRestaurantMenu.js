import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState();
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
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }

  return menu;
};

export default useRestaurantMenu;
