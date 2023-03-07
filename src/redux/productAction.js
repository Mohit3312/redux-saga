import { PRODUCT_LIST } from "./constant";

// export const productList = () => {
//   let data = "hello";
//   console.log("Action-productList called", data);
//   return {
//     type: PRODUCT_LIST,
//     data,
//   };
// };

export const productList = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = await data.json();
  console.log("Action-productList called", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
