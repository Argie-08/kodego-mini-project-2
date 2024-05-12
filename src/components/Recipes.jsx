import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "./Recipes.css";

const Recipes = () => {
  const [galleryData, getGalleryData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [exploreRecipe, setExploreRecipe] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  useEffect(() => {
    getGallery();
    return () => {};
  }, []);

  async function getGallery() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await response.json();
    const newGalleryData = data.meals.filter((recipe, index) => {
      return index >= 13;
    });
    getGalleryData(newGalleryData);
  }

  function exploreRecipeModal(exploreRecipe) {
    setExploreRecipe(exploreRecipe);
    setLgShow(true);
  }

  return (
    <div className="productGallery pb-5">
      <Container>
        <div className="d-flex justify-content-between pt-3">
          <h4 className="text-white pt-3 exploreText">EXPLORE NOW</h4>
          <a href="/items" className="m-0 ">
            <button className="py-1 px-3 my-2 viewAllBtn">View All</button>
          </a>
        </div>
        <Row>
          {galleryData
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, i) => {
              return (
                <Col sm={12} md={3} key={i}>
                  <Card
                    className="mt-2 cardSize border-0 mb-4"
                    onClick={() => exploreRecipeModal(val)}
                  >
                    <Card.Img
                      variant="top"
                      src={val.strMealThumb}
                      className="cardSize-img p-3 pb-0"
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="text-white">
                        {val.strCategory}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Container className="text-center recipeSearch ">
          <form
            id="search"
            className=" d-flex justify-content-center gap-2 pb-3"
          >
            <input
              type="text"
              id="searchInput"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder=" I am craving . . . search here"
              className="px-3 py-2 searchInputs text-center"
            />
          </form>
        </Container>
      </Container>
      {exploreRecipe ? (
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Col sm={12} className="mb-3 p-0">
            <img
              src={exploreRecipe.strMealThumb}
              alt=""
              className="modal2image"
            />
            <Modal.Header
              closeButton
              className="modalHeader2 d-flex justify-content-center align-items-center"
            ></Modal.Header>
          </Col>
          <Col
            sm={12}
            className="d-flex justify-content-between modalDetail align-items-center px-2"
          >
            <h3 className="m-0 modalText2">{exploreRecipe.strMeal}</h3>
            <p className="m-0">{exploreRecipe.strMeasure1}</p>
          </Col>
        </Modal>
      ) : null}
    </div>
  );
};

export default Recipes;
