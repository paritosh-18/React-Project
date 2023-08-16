import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredResult } from "../utils/helper";
import RestrauntCard from "./RestaurantCard";
import { findRestaurant } from "../utils/helper";
import { SWIGGY_API_LINK } from "../config";
// import useRestaurants from "../utils/useRestaurants";

const BodyContainer = () => {
  const [searchText, setSearchText] = useState("");
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

  return (
    <>
      <input
        className="input-btn"
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          setFilteredRestraunts(filteredResult(searchText, restraunts));
        }}
      >
        Search
      </button>
      {filteredRestraunts.length === 0 ? (
        <div className="RestrauntList">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        <div className="RestrauntList">
          {filteredRestraunts.map((restraunt) => {
            return (
              <Link
                to={"restaurant/" + restraunt?.info?.id}
                key={restraunt?.info?.id}
              >
                <RestrauntCard {...restraunt?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BodyContainer;
