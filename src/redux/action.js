import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("Action-addToCart called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeFromCart = (data) => {
  console.log("Action-removeFromCart called", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};
export const emptyCart = () => {
  console.log("Action-emptyCart called");
  return {
    type: EMPTY_CART,
  };
};
