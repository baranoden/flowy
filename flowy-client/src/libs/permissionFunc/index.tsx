import { useAppSelector } from "../../redux/store";
import { parser } from "../parser/parser";
import { useEffect } from "react";

const PermissionFunc = ({ children, permission }: any): any => {
  const isLogged = useAppSelector((state: any) => state.authSlice.isLogged);

  if (isLogged && permission === "admin") {
    if (parser("currentUser").isAdmin === true) {
      return children;
    } else {
      return null;
    }
  }
  if (isLogged && permission === "user") {
    return children;
  }
};

export default PermissionFunc;
