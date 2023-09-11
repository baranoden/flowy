import { all } from "redux-saga/effects";
import { authSaga } from "../views/pages/auth/store/saga";
import { generalSaga } from "../views/pages/store/saga";

export function* rootSaga() {
  yield all([authSaga(), generalSaga()]);
}
