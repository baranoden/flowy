import { Outlet } from "react-router-dom";
import Header from "./header";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
