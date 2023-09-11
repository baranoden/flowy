import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { parser } from "../parser/parser";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: any): any => {
  const isLogged = useAppSelector((state: any) => state.authSlice.isLogged);
  const user: any = useAppSelector((state: any) => state.authSlice.user);
  const states = useAppSelector((state) => state);

  if (isLogged) {
    if (parser("currentUser").info !== "") {
      return children;
    } else {
      return <Navigate to={"/register"}></Navigate>;
    }
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default ProtectedRoute;
