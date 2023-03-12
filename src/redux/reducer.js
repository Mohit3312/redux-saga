import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("Reducer called", action);
  //     return action.data;
  //   } else {
  //     return "no action matched";
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      // Logic for add to cart
      console.log("ADD_TO_CART Reducer", action);
      return [...data, action.data];

    case REMOVE_TO_CART:
      // Logic for remove from cart
      console.log("REMOVE_FROM_CART Reducer", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingItem = data.filter((item) => item.id !== action.data);
      // return [...data];
      // return [...data.slice(0, data.length - 1)];
      return [...remainingItem];

    case EMPTY_CART:
      // Logic for empty cart
      console.log("EMPTY_CART Reducer", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
