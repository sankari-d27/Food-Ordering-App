import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  const [rating, setRating] = useState("ALL");
  const [price, setPrice] = useState("ALL");

  const filteredFood = food_list.filter(item => {

    const categoryMatch =
      category === "All" ||
      item.category === category;

    const ratingMatch =
      rating === "ALL" ||
      (rating === "HIGH" && item.rating >= 4) ||
      (rating === "LOW" && item.rating < 4);

    const priceMatch =
      price === "ALL" ||
      (price === "LOW" && item.price <= 100) ||
      (price === "MID" &&
        item.price > 100 &&
        item.price <= 200);

    return categoryMatch &&
      ratingMatch &&
      priceMatch;

  });

  return (

    <div className="food-display">

      <h2>
        Top dishes for you nearby
      </h2>

      <div className="filters">

        <div>
          <p>Rating</p>

          {["ALL", "LOW", "HIGH"].map(value => (
            <button
              key={value}
              onClick={() => setRating(value)}
              className={
                rating === value ? "active" : ""
              }
            >
              {value}
            </button>
          ))}

        </div>

        <div>
          <p>Price</p>

          {["ALL", "LOW", "MID"].map(value => (
            <button
              key={value}
              onClick={() => setPrice(value)}
              className={
                price === value ? "active" : ""
              }
            >
              {value}
            </button>
          ))}

        </div>

      </div>

      <div className="food-display-list">

        {filteredFood.map(item => (

          <FoodItem
            key={item._id}
            {...item}
            id={item._id}
          />

        ))}

      </div>

    </div>
  );
};

export default FoodDisplay;
