const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    imageUrl,
  } = resData.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={imageUrl}
        alt={name}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;