import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { intlReducer } from "react-intl-redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(rootSaga);

export const application = {
  api: "http://localhost:3332",
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
