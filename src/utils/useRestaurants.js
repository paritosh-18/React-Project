import { useState, useEffect } from "react";
import { findRestaurant } from "./helper";
import { SWIGGY_API_LINK } from "../config";

const useRestaurants = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(SWIGGY_API_LINK);
    const fetchedData = await data.json();

    //finding index of cards which contains restaurant array
    const i = findRestaurant(fetchedData.data.cards);

    setFilteredRestraunts(
      fetchedData.data.cards[i]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestraunts(
      fetchedData.data.cards[i]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return {
    restraunts,
    filteredRestraunts,
  };
};

export default useRestaurants;
