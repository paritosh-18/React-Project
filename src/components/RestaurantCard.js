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
    <div className="w-48 m-2 p-2 bg-gray-50 shadow-md">
      <img
        className="w-44"
        alt="restrauntLogo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-lg text-center">{name}</h2>
      <h3>{areaName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

export default RestrauntCard;
