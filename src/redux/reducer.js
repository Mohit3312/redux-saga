import { ADD_TO_CART } from "./constant";

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
      console.log("ADD_TO_CART", action);
      return [action.data, ...data];

    default:
      return data;
  }
};
