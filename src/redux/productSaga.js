import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  console.log("getProducts");
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProduct(data) {
  console.log("searchProduct");
  let searchData = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  searchData = yield searchData.json();
  yield put({ type: SET_PRODUCT_LIST, data: searchData });
}

function* productSaga() {
  console.log("productSaga");
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;
