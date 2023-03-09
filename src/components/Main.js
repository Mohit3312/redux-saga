import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const productDataResult = useSelector((state) => state.productData);
  console.log("Data in main component from saga", productDataResult);
  const product = {
    name: "GT Master",
    color: "white",
    type: "mobile",
    price: 26000,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "1rem",
      }}
    >
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to Cart
      </button>

      <button
        onClick={() => {
          dispatch(removeFromCart(product.name));
        }}
      >
        Remove from Cart
      </button>

      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty Cart
      </button>

      <button
        onClick={() => {
          dispatch(productList());
        }}
      >
        Get Product List
      </button>
    </div>
  );
}

export default Main;
