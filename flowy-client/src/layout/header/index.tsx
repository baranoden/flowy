import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavData } from "../../libs/navData/NavData";
import PermissionFunc from "../../libs/permissionFunc";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../views/components/customButton/CustomButton";
import { useIntl } from "react-intl";
import styles from "../Layout.module.scss";
import { useDispatch } from "react-redux";
import { generalTypes } from "../../views/pages/store/types";
import { useAppSelector } from "../../redux/store";

const Header = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const lang: any = useAppSelector(
    (state: any) => state.generalSlice.intl.locale
  );
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className={styles.headerTitle}>
            Flowy.
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={
              styles.menu +
              " d-flex justify-content-center align-items-center w-100"
            }
          >
            {NavData.map((item, index) => {
              return (
                <PermissionFunc key={index} permission={item.permission}>
                  <Nav.Link onClick={() => nav(item.path)} className="w-25">
                    <Link to={item.path}>
                      {intl.formatMessage({ id: item.label })}
                    </Link>
                  </Nav.Link>
                </PermissionFunc>
              );
            })}
            <CustomButton
              onClick={() =>
                dispatch({
                  type: generalTypes.SET_LOCALE,
                  payload: lang === "tr" ? "en" : "tr",
                })
              }
              holder={intl.formatMessage({ id: "CHANGE_LANGUAGE" })}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
