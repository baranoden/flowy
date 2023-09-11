import { generalTypes } from "./types";
import { all, put, takeLatest } from "redux-saga/effects";
import { changeLocale } from "./slice";
import toast from "react-hot-toast";

function* localeHandler({ payload }: any) {
  try {
    yield put(changeLocale(payload));
    toast.success("Success");
  } catch (e) {
    toast.error("Failure");
    yield put(changeLocale("en"));
  }
}

export function* generalSaga() {
  yield all([takeLatest(generalTypes.SET_LOCALE, localeHandler)]);
}
