import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);

  let amount =
    cartData.length &&
    cartData.reduce((total, item) => {
      return total + item.price;
    }, 0);
  let discount = 10;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/">Product List</Link>
      <h1>Cart Page</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <table style={{ width: "750px", textAlign: "center" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Color
              </th>
              <th
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Price
              </th>
              <th
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Brand
              </th>
              <th
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((data) => (
              <tr key={data.id}>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  {data.name}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  {data.color}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  {data.price}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  {data.brand}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  {data.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            padding: "5px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
            <span>
              <b>Amount</b>
            </span>
            <span>Rs. {amount}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
            <span>
              <b>Discount ({discount}%)</b>
            </span>
            <span>Rs. {(amount * discount) / 100}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
            <span>
              <b>Tax</b>
            </span>
            <span>Rs. 0</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
            <span>
              <b>Total</b>
            </span>
            <span>Rs. {(amount * (100 - discount)) / 100}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
