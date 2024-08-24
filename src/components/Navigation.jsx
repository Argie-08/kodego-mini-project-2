import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";
import { useState } from "react";
import "./Navigation.css";
import logo from "../assets/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function nextPage(path) {
    setShow(false);
    navigate(path);
  }
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand="lg"
          className=" mb-4 navBar p-0 pt-2"
          sticky="top"
        >
          <Container fluid className="navContainer py-0 px-3 mx-2">
            <Navbar.Brand href="#">
              <img src={logo} alt="" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setShow(true)} />
            <Navbar.Offcanvas
              className="NavBarTest"
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
              show={show}
              onHide={() => setShow(false)}
            >
              <Offcanvas.Header closeButton className="NavBarTest2">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand`}
                  className="NavWake"
                >
                  "Wake up your recipe"
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 p-2 navBarText gap-3 d-flex align-items-center">
                  {routes.map((route, index) => {
                    return (
                      <Nav.Link
                        key={index}
                        onClick={() => nextPage(route.path)}
                      >
                        {route.name}
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;
