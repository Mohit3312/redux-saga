import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Link to="/">Product List</Link>
      <h1>Cart Page</h1>
    </div>
  );
};

export default Cart;
