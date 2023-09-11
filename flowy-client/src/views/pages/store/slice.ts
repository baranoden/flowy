import { createSlice } from "@reduxjs/toolkit";
let localeAlt = "en";
const generalSlice = createSlice({
  name: "generalSlice",
  initialState: {
    intl: {
      locale: "en",
      messages: require(`../../../intl/${localeAlt}.json`),
    },
  },
  reducers: {
    changeLocale: (state, action) => {
      state.intl.locale = action.payload;
      state.intl.messages = require(`../../../intl/${action.payload}.json`);
    },
  },
});

export const { changeLocale } = generalSlice.actions;
export default generalSlice.reducer;
