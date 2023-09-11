import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { parser } from "../parser/parser";
import toast from "react-hot-toast";

const PermissionRoute = ({ children, permission }: any): any => {
  const isLogged = useAppSelector((state: any) => state.authSlice.isLogged);

  if (isLogged && permission === "admin") {
    if (parser("currentUser").isAdmin === true) {
      return children;
    } else {
      return <Navigate to={"/"}></Navigate>;
    }
  }
  if (isLogged && permission === "user") {
    return children;
  }
};

export default PermissionRoute;
