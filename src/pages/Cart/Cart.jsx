import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { offers } from "../../assets/assets";

const Cart = () => {

  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const isCartEmpty =
    Object.values(cartItems).every(qty => qty === 0);

  // Find best category automatically
  const getBestCategory = () => {

    const categoryCount = {};

    food_list.forEach(item => {

      const qty = cartItems[item._id] || 0;

      if (qty > 0) {

        categoryCount[item.category] =
          (categoryCount[item.category] || 0) + qty;

      }

    });

    if (Object.keys(categoryCount).length === 0) {
      return null;
    }

    const maxQty = Math.max(
      ...Object.values(categoryCount)
    );

    const topCategories =
      Object.keys(categoryCount).filter(
        category =>
          categoryCount[category] === maxQty
      );

    // Same quantity - choose highest discount
    const bestCategory =
      topCategories.reduce((best, current) => {

        return (
          offers[current]?.discount || 0
        ) >
          (
            offers[best]?.discount || 0
          )
          ? current
          : best;

      });

    return bestCategory;

  };

  // Automatically show promo code
  useEffect(() => {

    const category = getBestCategory();

    if (category && offers[category]) {

      setPromoCode(
        offers[category].code
      );

    }
    else {

      setPromoCode("");

    }

    setDiscount(0);
    setMessage("");

  }, [cartItems]);

  const applyPromoCode = () => {

    const selectedCategory =
      getBestCategory();

    if (!selectedCategory) {

      setMessage("Cart is empty");
      return;
    }

    const offer =
      offers[selectedCategory];

    if (!offer) {

      setMessage("No offer available");
      return;
    }

    let discountAmount = 0;

    food_list.forEach(item => {

      if (
        item.category === selectedCategory &&
        cartItems[item._id] > 0
      ) {

        discountAmount +=
          item.price *
          cartItems[item._id] *
          offer.discount /
          100;
      }
    });

    setDiscount(discountAmount);

    setMessage(
      `✅ ${offer.discount}% discount applied on ${selectedCategory}`
    );

  };

  return (

    <div className='cart'>

      <div className="cart-items">

        <div className="cart-items-title">

          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>

        <br />
        <hr />

        {
          food_list.map(item => {

            if (cartItems[item._id] > 0) {

              return (

                <div key={item._id}>

                  <div className='cart-items-title cart-items-item'>

                    <img src={item.image} alt="" />

                    <p>{item.name}</p>

                    <p>${item.price}</p>

                    <p>{cartItems[item._id]}</p>

                    <p>
                      ${item.price * cartItems[item._id]}
                    </p>

                    <p className="cross" onClick={() => removeFromCart(item._id)}>
                      X
                    </p>

                  </div>

                  <hr />

                </div>
          )}
            return null;
          })
        }

      </div>

      <div className='cart-bottom'>

        <div className='cart-total'>
          <h2>Cart Totals</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Discount</p>
              <p>-${discount.toFixed(2)}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${(getTotalCartAmount()
                  + 2
                  - discount
                ).toFixed(2)}
              </b>
            </div>

          </div>

          <button disabled={isCartEmpty} onClick={() => navigate('/order')}>
            PROCEED TO CHECKOUT
          </button>

        </div>

        <div className='cart-promocode'>

          <p>Best discount Promo Code</p>

          <div className='cart-promocode-input'>

            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              readOnly
            />

            <button onClick={applyPromoCode}>Apply Best Offer</button>

          </div>

          {
            message &&
            <p style={{ marginTop: "10px", color: message.includes("empty") ? "red" : "green", fontWeight: "bold"}}>
              {message}
            </p>
          }

        </div>

      </div>

    </div>

  );};

export default Cart;
