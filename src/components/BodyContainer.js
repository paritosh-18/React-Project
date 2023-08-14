import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredResult } from "../utils/helper";
import RestrauntCard from "./RestaurantCard";
import useRestaurants from "../utils/useRestaurants";

const BodyContainer = () => {
  const [searchText, setSearchText] = useState("");

  // A custom hook to fetch restaurants from the Swiggy API and populate same in two variables
  const { restraunts, filteredRestraunts } = useRestaurants();

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
