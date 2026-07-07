import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 0)
    }));
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {

      const item = food_list.find(
        product => product._id === id
      );

      return item
        ? total + item.price * qty
        : total;

    }, 0);
  };

  const getTotalCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, qty) => total + qty,
      0
    );
  };

  const clearCart = () => {
    setCartItems({});
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartCount,
    clearCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
