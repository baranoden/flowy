import { authTypes } from "./types";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { canLogin } from "./slice";
import axios, { AxiosResponse } from "axios";
import { application } from "../../../../redux/store";
import toast from "react-hot-toast";
import { parser } from "../../../../libs/parser/parser";
import { LanguageFunc } from "../../../../libs/languageFunc/LanguageFunc";

function* registerHandler({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.post(`${application.api}/api/auth/register`, {
        username: payload.username,
        password: payload.password,
        isadmin: payload.isadmin,
      })
    );

    yield put(canLogin(response.data));
    toast.success("Success");
  } catch (e) {
    toast.error("Failure");
    yield put(canLogin(false));
  }
}

function* validateHandler({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.post(`${application.api}/api/auth/validate`, {
        info: payload.info,
        username: parser("currentUser").username,
      })
    );
    toast.success("Success");
    yield put(canLogin(response.data));
  } catch (e) {
    toast.error("Failure");
  }
}

function* loginHandler({ payload }: any) {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.post(`${application.api}/api/auth/login`, {
        username: payload.username,
        password: payload.password,
      })
    );
    yield put(canLogin(response.data.data));
    toast.success("Success");
  } catch (e) {
    toast.error("Failure");
  }
}

export function* authSaga() {
  yield all([
    takeLatest(authTypes.REGISTER, registerHandler),
    takeLatest(authTypes.VALIDATE, validateHandler),
    takeLatest(authTypes.LOGIN, loginHandler),
  ]);
}
