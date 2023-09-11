import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div data-testid="Outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
