import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartDataResult = useSelector((state) => state.cartData);
  console.log("Data in header component", cartDataResult);
  return (
    <div
      className="header"
      style={{ backgroundColor: "orange", height: "100px" }}
    >
      <div
        className="cart-div"
        style={{ float: "right", margin: "25px", position: "relative" }}
      >
        <span>{cartDataResult.length}</span>
        <i className="fa-solid fa-cart-shopping fa-3x"></i>
      </div>
    </div>
  );
};

export default Header;
