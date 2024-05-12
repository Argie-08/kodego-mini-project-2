import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import bike from "../assets/ninja.jpg";
import cookBond from "../assets/cookBond.jpg";
import "./Hero.css";
import Recipes from "../components/Recipes";
import Foodcraving from "../components/Foodcraving";
import Body from "./Body";

const Hero = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    getRecipe();
    return () => {};
  }, []);

  async function getRecipe() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    const data = await response.json();
    const newCarouselData = data.meals.filter((recipe, index) => {
      return index >= 18;
    });
    setCarouselData(newCarouselData);
  }

  return (
    <>
      <Container id="Homebased">
        <div className="navBase mb-5">
          <Carousel fade className="carouselMain">
            {carouselData.map((detail, index) => {
              return (
                <Carousel.Item
                  interval={2500}
                  className="carouselContainer"
                  key={index}
                >
                  <div className="overlay"></div>
                  <img src={detail.strMealThumb} className="bike" />
                  <Carousel.Caption className="carouselText">
                    <h3>{detail.strMeal}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <h2 className="welcomeTitle">Welcome</h2>
        </div>
      </Container>{" "}
      <div className="bodyElement text-center mb-4 py-5">
        <Container className="d-flex flex-column align-items-center justify-content-center aboutContents">
          <Row>
            <Col sm={12}>
              <p className="aboutText m-0 mb-5">
                We're on a mission to revolutionize the way people approach
                cooking. We want to break down barriers and make the kitchen a
                place of joy, creativity, and discovery for everyone, regardless
                of skill level or experience. Whether you're a seasoned chef or
                a novice home cook, we're here to guide you on your culinary
                journey.
              </p>
              <a href="/body">
                <button className="aboutButtons px-4 py-1">LEARN MORE</button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Foodcraving />
      <Container className="mb-4">
        <h5 className="mb-3 w-100  border-2 pb-2 borderbottom">
          "A great cook, one learns by doing great cook..."
        </h5>
        <Row className="foodReview mb-4">
          <Col
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-center mb-3"
          >
            <div className="text-center mb-3">
              <h1 className="bondText">MEET.</h1>
              <h1 className="bondText">GATHER.</h1>
              <h1 className="bondText">COOK TIME.</h1>
            </div>
            <div className="border border-2 p-2 text-center foodReview-box bg-dark">
              <p className="text-white favText">
                Come and see your favorite food from our e-cookbook{" "}
              </p>
              <a href="/items">
                <button className="foodReview-btn px-4 py-1 mb-2">MENU</button>
              </a>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="foodReview-column">
              <img src={cookBond} alt="" className="foodReview-img" />
              <div className="overlay-img"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Recipes />
    </>
  );
};

export default Hero;
