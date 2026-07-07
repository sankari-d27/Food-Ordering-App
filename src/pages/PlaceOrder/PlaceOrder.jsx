import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import Swal from "sweetalert2";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  phone: ""
};

const PlaceOrder = () => {

  const {
    getTotalCartAmount,
    clearCart
  } = useContext(StoreContext);

  const [formData, setFormData] =
    useState(initialForm);

    const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Payment Successful!",
      text: "Your order has been placed successfully.",
      confirmButtonColor: "tomato"
    }).then(() => {

      setFormData(initialForm);
      clearCart();
    });
  };

  const fields = [
    "firstName",
    "lastName",
    "email",
    "street",
    "city",
    "state",
    "zip",
    "country",
    "phone"
  ];

  return (

    <form
      className="place-order"
      onSubmit={handleSubmit}
    >

      <div className="place-order-left">

        <p className="title">
          Delivery Information
        </p>

        {
          fields.map(field => (
            <input
              key={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={
                field.replace(
                  /([A-Z])/g,
                  " $1"
              )}
            />
          ))}
      </div>

      <div className="place-order-right">

        <div className="cart-total">
          <h2>
            Cart Totals
          </h2>

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
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>

          </div>

          <button>
            PROCEED TO PAYMENT
          </button>

        </div>

      </div>

    </form>
  );};

  export default PlaceOrder;
