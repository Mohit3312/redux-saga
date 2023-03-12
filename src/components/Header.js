import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartDataResult = useSelector((state) => state.cartData);
  console.log("Data in header component", cartDataResult);
  return (
    <div
      className="header"
      style={{ backgroundColor: "orange", height: "100px" }}
    >
      <Link to="/">
        <div style={{ float: "left", margin: "10px", position: "relative" }}>
          <h1>E-Comm</h1>
        </div>
      </Link>
      <Link to="/cart">
        <div style={{ float: "right", margin: "25px", position: "relative" }}>
          <span>{cartDataResult.length}</span>
          <i className="fa-solid fa-cart-shopping fa-3x"></i>
        </div>
      </Link>
    </div>
  );
};

export default Header;
