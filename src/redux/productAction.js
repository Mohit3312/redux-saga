import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

// export const productList = () => {
//   let data = "hello";
//   console.log("Action-productList called", data);
//   return {
//     type: PRODUCT_LIST,
//     data,
//   };
// };

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const searchProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
