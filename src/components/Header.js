import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../redux/productAction";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const cartDataResult = useSelector((state) => state.cartData);
  console.log("Data in header component", cartDataResult);
  return (
    <div
      className="header"
      style={{
        backgroundColor: "orange",
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <div
          style={{
            float: "left",
            margin: "10px",
            marginLeft: "50px",
            position: "relative",
          }}
        >
          <h1>E-Comm</h1>
        </div>
      </Link>
      <div style={{ alignSelf: "center" }}>
        <input
          type="text"
          placeholder="Search Product"
          style={{
            width: "430px",
            height: "25px",
            padding: "7px",
            border: "2px solid red",
            borderRadius: "10px",
            fontSize: "16px",
          }}
          onChange={(event) => {
            dispatch(searchProduct(event.target.value));
          }}
        />
      </div>
      <Link to="/cart">
        <div
          style={{
            float: "right",
            margin: "25px",
            marginRight: "50px",
            position: "relative",
          }}
        >
          <span>{cartDataResult.length}</span>
          <i className="fa-solid fa-cart-shopping fa-3x"></i>
        </div>
      </Link>
    </div>
  );
};

export default Header;
