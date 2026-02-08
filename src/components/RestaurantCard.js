const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
              cloudinaryImageId
            : "https://via.placeholder.com/300x200?text=No+Image"
        }
        alt={name}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;