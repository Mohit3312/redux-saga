import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log(result);
  return (
    <div
      className="header"
      style={{ backgroundColor: "orange", height: "100px" }}
    >
      <div
        className="cart-div"
        style={{ float: "right", margin: "25px", position: "relative" }}
      >
        <span>{result.length}</span>
        <i className="fa-solid fa-cart-shopping fa-3x"></i>
      </div>
    </div>
  );
};

export default Header;
