import { Restraunts } from "../config";
import { IMG_CDN_URL } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filteredResult(searchTxt, restrauntList) {
  const filteredData = restrauntList.filter((restraunt) =>
    restraunt.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );

  return filteredData;
}

//Props is an object of all the properties that we pass while calling out functional component
const RestrauntCard = ({
  cloudinaryImageId,
  name,
  areaName,
  cuisines,
  avgRating,
}) => {
  // const { cloudinaryImageId, name, areaName, cuisines, avgRating } = restraunt; -> another way to destructure props
  return (
    <div className="Card">
      <img
        className="CardImage"
        alt="restrauntLogo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} *</h4>
    </div>
  );
};

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

    console.log(fetchedData);

    setFilteredRestraunts(
      fetchedData.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestraunts(
      fetchedData.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
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
              <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BodyContainer;
