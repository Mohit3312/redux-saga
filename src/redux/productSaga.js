import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  console.log("getProducts");
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  console.log("productSaga");
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
