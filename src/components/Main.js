import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";

function Main() {
  const dispatch = useDispatch();
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
    </div>
  );
}

export default Main;
