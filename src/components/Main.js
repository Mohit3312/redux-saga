import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const productDataResult = useSelector((state) => state.productData);
  console.log("Data in main component from saga", productDataResult);

  useEffect(() => {
    dispatch(productList());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "1rem",
        }}
      >
        <button
          onClick={() => {
            dispatch(emptyCart());
          }}
        >
          Empty Cart
        </button>
      </div>
      <div
        className="product-container"
        style={{
          margin: "50px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "space-evenly",
        }}
      >
        {productDataResult.map((item) => (
          <div
            key={item.id}
            className="product-item"
            style={{
              display: "flex",
              alignItems: "space-evenly",
              flexDirection: "column",
              border: "2px solid black",
              margin: "20px",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <img src={item.photo} height="100px" alt="" />
            <div style={{ marginTop: "25px" }}>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "25px",
              }}
            >
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
