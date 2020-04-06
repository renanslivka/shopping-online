import { all, call } from "redux-saga/effects";
import { shopSaga } from "./shop/shop.sagas";
import { userSagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.saga";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSagas), call(cartSagas)]);
}
