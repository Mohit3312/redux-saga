export const addToCart = (data) => {
  console.log("Action called", data);
  return {
    type: "Add_To_Cart",
    data,
  };
};
