import { Restraunts } from "../config";
import { IMG_CDN_URL } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import findRestaurant from "../HelperFunctions/findRestaurant";
import filteredResult from "../HelperFunctions/filteredResult";
import RestrauntCard from "./RestaurantCard";

const BodyContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.642684&lng=77.3453639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const fetchedData = await data.json();

    // console.log(fetchedData.data.cards);

    //finding index of cards which contains restaurant array
    const i = findRestaurant(fetchedData.data.cards);

    // console.log(i);

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
