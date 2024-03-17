import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Body.css";
import KitchenImg from "../assets/kitchen2.jpg";
import Preparation from "../assets/aboutImg1.jpg";
import Chief1 from "../assets/prof1.jpg";
import Chief2 from "../assets/prof2.jpg";
import Chief3 from "../assets/prof3.jpg";

const Body = () => {
  return (
    <>
      <Container className="" id="about">
        <Row className="mb-5">
          <Col sm={12} className="aboutHead p-0">
            <img src={KitchenImg} alt="" className="aboutImg" />
            <div className="aboutSubTxt">About</div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={12} md={2}></Col>
          <Col sm={12} md={8}>
            <p className="text-black text-center aboutMainText">
              At Eula's Kitchen, we believe that cooking is more than just a
              necessity; it's an art, a passion, and a pathway to creating
              memorable experiences. Our mission is simple: to inspire and
              empower individuals to explore the world of cooking, one delicious
              recipe at a time.
            </p>
          </Col>
          <Col sm={12} md={2}></Col>
        </Row>
        <Row className="mb-5">
          <Col sm={12} md={6} className="aboutContent p-0 p-3">
            <img src={Preparation} alt="" className="aboutImges" />
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex align-items-center text-center px-5"
          >
            <p className="aboutTxt p-0 p-3 m-0">
              Seasonal changes, outstanding ingredients and a made-from-scratch
              philosophy guide Eula's recipe of house-made vegestarian and
              pasta, pork, beef and chicken. The chef suggested of curated
              dinner and dessert menus, pair with the well balanced wine and
              beverage program.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pt-3 mb-5">
          <h2 className="d-flex justify-content-center mb-4 featureText">
            Featuring: Our homebased Chief.
          </h2>
          <Col sm={12} md={2} className="">
            <Card className="aboutCard rounded-0 border border-black border-1 mb-3">
              <Card.Img
                variant="top"
                src={Chief1}
                className="aboutChief rounded-0"
              />
              <Card.Body className="p-0 m-0 py-1">
                <Card.Title className="text-center mt-3 chiefName">
                  Ce Zaa
                </Card.Title>
              </Card.Body>
              <div className="overlayChief"></div>
            </Card>
          </Col>
          <Col sm={12} md={2} className="chiefBox">
            <Card className="aboutCard rounded-0 border border-black border-1 mb-3">
              <Card.Img
                variant="top"
                src={Chief3}
                className="aboutChief rounded-0"
              />
              <Card.Body className="p-0 m-0 py-1">
                <Card.Title className="text-center mt-3 chiefName">
                  Arg Kho
                </Card.Title>
              </Card.Body>
              <div className="overlayChief"></div>
            </Card>
          </Col>
          <Col sm={12} md={2} className="chiefBox">
            <Card className="aboutCard rounded-0 border border-black border-1 mb-3">
              <Card.Img
                variant="top"
                src={Chief2}
                className="aboutChief rounded-0"
              />
              <Card.Body className="p-0 m-0 py-1">
                <Card.Title className="text-center mt-3 chiefName">
                  Rea Lyn
                </Card.Title>
              </Card.Body>
              <div className="overlayChief"></div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
