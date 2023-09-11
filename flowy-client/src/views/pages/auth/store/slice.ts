import { createSlice } from "@reduxjs/toolkit";

const currentUser: any = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") as string)
  : null;
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    canLogin: false,
    user: {},
    isLogged: currentUser ? true : false,
  },
  reducers: {
    canLogin: (state, action) => {
      state.canLogin = action.payload.canLogin;
      state.user = action.payload.user;
      if (action.payload) {
        if (action.payload.user && action.payload.canLogin) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify(action.payload.user)
          );
          state.isLogged = true;
        }
      }
    },
    signOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const { canLogin, signOut } = authSlice.actions;
export default authSlice.reducer;
