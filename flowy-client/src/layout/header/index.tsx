import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavData } from "../../libs/navData/NavData";
import PermissionFunc from "../../libs/permissionFunc";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-first">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Flowy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center w-100">
            {NavData.map((item) => {
              return (
                <PermissionFunc permission={item.permission}>
                  <Nav.Link className="w-25">
                    <Link to={item.path}>{item.label}</Link>
                  </Nav.Link>
                </PermissionFunc>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
