import { Restraunts } from "../config";
import { IMG_CDN_URL } from "../config";
import { useState } from "react";

function filteredResult(searchTxt) {
  const filteredData = Restraunts.filter((restraunt) =>
    restraunt.info.name.includes(searchTxt)
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
  const [restraunts, setRestraunts] = useState(Restraunts);

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
          setRestraunts(filteredResult(searchText));
        }}
      >
        Search
      </button>
      <div className="RestrauntList">
        {restraunts.map((restraunt) => {
          return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />;
        })}
      </div>
    </>
  );
};

export default BodyContainer;
