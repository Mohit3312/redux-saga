import "./App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "GT Master",
    color: "white",
    type: "mobile",
    price: 26000,
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default App;
