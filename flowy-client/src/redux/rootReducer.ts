import { combineReducers } from "redux";
import authSlice from "../views/pages/auth/store/slice";
import generalSlice from "../views/pages/store/slice";
import { intlReducer } from "react-intl-redux";

export const rootReducer = combineReducers({
  authSlice,
  intlReducer,
  generalSlice,
});
