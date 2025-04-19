import React, { useReducer } from "react";
import Cart from "./Cart"; // Adjust path if it's inside components/
import cartData from "./cart.json"; // Assuming your JSON is saved here

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const App = () => {
  const [cartItems, dispatch] = useReducer(reducer, cartData);

  const handleIncrease = (id) => dispatch({ type: "INCREASE", payload: id });
  const handleDecrease = (id) => dispatch({ type: "DECREASE", payload: id });
  const handleRemove = (id) => dispatch({ type: "REMOVE", payload: id });
  const handleClear = () => dispatch({ type: "CLEAR" });

  return (
    <Cart
      cartItems={cartItems}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onRemove={handleRemove}
      onClear={handleClear}
    />
  );
};

export default App;
