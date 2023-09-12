import { generalTypes } from "./types";
import { all, put, takeLatest } from "redux-saga/effects";
import { changeLocale } from "./slice";
import toast from "react-hot-toast";
import { FormattedMessage } from "react-intl";

function* localeHandler({ payload }: any) {
  try {
    yield put(changeLocale(payload));
    toast.success(<FormattedMessage id="SUCCESSFUL_LANGUAGE" />);
  } catch (e) {
    toast.error(<FormattedMessage id="FAIL_LANGUAGE" />);
    yield put(changeLocale("en"));
  }
}

export function* generalSaga() {
  yield all([takeLatest(generalTypes.SET_LOCALE, localeHandler)]);
}
