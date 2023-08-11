import { IMG_CDN_URL } from "../config";

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

export default RestrauntCard;
