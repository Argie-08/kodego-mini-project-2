import Container from "react-bootstrap/Container";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/logo.png";
import footerLogo from "../assets/footerLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerBack pt-2 mt-0">
      <Container className=" footerFoot pb-3">
        <Row className="d-flex justify-content-center pt-4">
          <Col sm={12} md={2} className="d-flex flex-column ">
            <img src={Logo} alt="" className="cursor-pointer" />
            <Row>
              <Col></Col>
            </Row>
            <a className="fontSize1 m-0">&copy; 2024 Eula's Recipe</a>
          </Col>
          <Col sm={12} md={2} className="d-flex align-items-center pt-2  ">
            <a className="fontSize1 m-0">Develop by: ArgDev</a>
          </Col>
          <Col sm={12} md={1} className="d-flex align-items-center pt-2 ">
            <a href="/items" className="fontSize m-0">
              MENU
            </a>
          </Col>

          <Col sm={12} md={1} className="d-flex align-items-center pt-2 ">
            <a href="/body" className="fontSize m-0">
              ABOUT US
            </a>
          </Col>
          <Col sm={12} md={1} className="d-flex align-items-center pt-2 ">
            <a href="/contact" className="fontSize m-0 ">
              CONTACT US
            </a>
          </Col>
          <Col sm={12} md={2} className="d-flex align-items-center pt-2 gap-3">
            <FaFacebook className="icon icon1" />
            <MdEmail className="icon icon2" />
            <FaYoutube className="icon icon3" />
            <FaInstagram className="icon icon4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
