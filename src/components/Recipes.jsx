import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import "./Recipes.css";

const Recipes = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [allRecipe, setAllRecipe] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [exploreRecipe, setExploreRecipe] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    const allGallery = data.meals;
    setAllRecipe(allGallery);
    setGalleryData(newGalleryData);
  }
  function exploreRecipeModal(exploreRecipe) {
    setExploreRecipe(exploreRecipe);
    setLgShow(true);
  }
  function toShop() {
    navigate("/recipes");
  }

  return (
    <div className="productGallery pb-5">
      <Container>
        <div className="d-flex justify-content-between pt-3">
          <h4 className="text-white pt-3 exploreText">EXPLORE NOW</h4>
          <button className="py-1 px-4 my-2 viewAllBtn" onClick={toShop}>
            View All
          </button>
        </div>
        <Row>
          {allRecipe
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
                <Col xs={6} md={3} key={i} className="p-0">
                  <Card
                    className="mt-2 cardSize border-0 mb-4"
                    onClick={() => exploreRecipeModal(val)}
                  >
                    <Card.Img
                      variant="top"
                      src={val.strMealThumb}
                      className="cardSize-img p-3 pb-0"
                    />
                    <Card.Body className="text-center p-0 pt-2">
                      <Card.Title className="text-white">
                        Recipe of {val.strArea}
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
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText
                v-model="value1"
                placeholder="Search your food category here..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </IconField>
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
            className="d-flex justify-content-between modalDetail align-items-center p-4"
          >
            <h3 className="m-0 modalText2">{exploreRecipe.strInstructions}</h3>
          </Col>
        </Modal>
      ) : null}
    </div>
  );
};

export default Recipes;
