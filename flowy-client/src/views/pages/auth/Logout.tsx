import React, { useEffect } from "react";
import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { signOut } from "./store/slice";

const Logout = () => {
  const dispatch = useDispatch();
  const isLogged = useAppSelector((state: any) => state.authSlice.isLogged);

  function logout() {
    try {
      localStorage.clear();
      dispatch(signOut());
    } catch (error) {
      localStorage.clear();
      dispatch(signOut());
    }
  }
  useEffect(() => {
    if (isLogged) {
      logout();
    }
  }, [isLogged]);

  return <div>Logging out... </div>;
};

export default Logout;
