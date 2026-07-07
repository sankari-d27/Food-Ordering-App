import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const FoodItem = ({
  id,
  name,
  price,
  description,
  image,
  rating
}) => {

  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useContext(StoreContext);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {

      if (i <= Math.floor(rating)) {
        stars.push(
          <FaStar key={i} color="#f14e25" />
        );
      }
      else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} color="#f14e25" />
        );
      }
      else {
        stars.push(
          <FaRegStar key={i} color="#f14e25" />
        );
      }
    }

    return stars;
  };

  return (
    <div className="food-item">

      <div className="food-item-img-container">

        <img
          className="food-item-image"
          src={image}
          alt={name}
        />

        {!cartItems[id] ? 
         (<img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            alt="add"
          />) : (

          <div className="food-item-counter">

            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt="remove"
            />

            <p>{cartItems[id]}</p>

            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt="add"
            />

          </div>

        )}

      </div>

      <div className="food-item-info">

        <div className="food-item-name-text">

          <p>{name}</p>

          <p className="food-item-desc">
            {description}
          </p>

        </div>

        <div className="food-item-name-rating">

          <p className="food-item-price">
            ${price}
          </p>

          <div className="food-rating">

            {renderStars()}

            <span>
              {rating}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FoodItem;
