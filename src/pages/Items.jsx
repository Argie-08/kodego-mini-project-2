import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Recipe from "../assets/Recipe.pdf";
import "./Items.css";
import axios from "axios";

const Items = () => {
  const [lgShow, setLgShow] = useState(false);
  const [modalRecipe, setModalRecipe] = useState({});
  const [recipee, setRecipe] = useState([]);
  const [selected, setSelected] = useState([]);
  const [defaultRecipe, setDefaultRecipe] = useState(true);
  const [filterRecipe, setFilterRecipe] = useState(false);

  useEffect(() => {
    fetchDatas();
    return () => {};
  }, []);

  async function fetchDatas() {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const filter = response.data;
    const data = filter.meals;
    setRecipe(data);
  }

  function filterItems(title) {
    setDefaultRecipe(false);
    setFilterRecipe(true);
    const filtered = title;
    if (filtered === "All") {
      setSelected(recipee);
    } else {
      setSelected(recipee.filter((data) => data.strCategory === filtered));
    }
  }

  function handleRecipeModal(selectedRecipe) {
    setModalRecipe(selectedRecipe);
    setLgShow(true);
  }

  return (
    <>
      <Container className="recipeHeadBox d-flex justify-content-center mt-5 mb-5">
        <h1 className="recipeHead">Check Out Your Favorite Recipe</h1>
      </Container>

      <Container className="d-flex justify-content-center mb-5 flex-wrap gap-4">
        <button
          className="categoryBtn  px-5"
          onClick={() => filterItems("All")}
        >
          All
        </button>

        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Beef")}
        >
          Beef
        </button>
        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Chicken")}
        >
          Chicken
        </button>
        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Pork")}
        >
          Pork
        </button>
        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Seafood")}
        >
          Seafood
        </button>
        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Dessert")}
        >
          Dessert
        </button>
        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Pasta")}
        >
          Pasta
        </button>
        <button
          className="categoryBtn py-2 px-5"
          onClick={() => filterItems("Vegetarian")}
        >
          Vegetarian
        </button>
      </Container>
      <Container className="mb-5">
        <Row>
          {defaultRecipe &&
            recipee.map((detail, i) => {
              return (
                <Col sm={12} md={3} className="mb-4" key={i}>
                  <Card
                    className="rounded-0 recipeThisCard"
                    onClick={() => handleRecipeModal(detail)}
                  >
                    <Card.Img
                      variant="top"
                      src={detail.strMealThumb}
                      className="rounded-0 recipeGalleryCard"
                    />
                    <Card.Body className="p-0 bg-dark galleryTitle">
                      <Card.Title className="text-center text-white m-0 my-1">
                        {detail.strMeal}
                      </Card.Title>
                    </Card.Body>
                    <div className="overlayGallery"></div>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Row>
          {filterRecipe &&
            selected.map((detail, i) => {
              return (
                <Col sm={12} md={3} className="mb-4" key={i}>
                  <Card
                    className="rounded-0 recipeThisCard"
                    onClick={() => handleRecipeModal(detail)}
                  >
                    <Card.Img
                      variant="top"
                      src={detail.strMealThumb}
                      className="rounded-0 recipeGalleryCard"
                    />
                    <Card.Body className="p-0 bg-dark galleryTitle">
                      <Card.Title className="text-center text-white m-0 my-1">
                        {detail.strMeal}
                      </Card.Title>
                    </Card.Body>
                    <div className="overlayGallery"></div>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
      {modalRecipe ? (
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
          className=""
        >
          <Modal.Header closeButton className="modalBody3">
            <Modal.Title
              id="example-modal-sizes-title-lg"
              className="modalText8"
            >
              {modalRecipe.strMeal} Recipe
            </Modal.Title>
          </Modal.Header>
          <img src={modalRecipe.strMealThumb} alt="" className="modalPic" />

          <Modal.Body className="">
            <h5 className="mb-3">PROCEDURE:</h5>
            {modalRecipe.strInstructions}
            <h5 className="mt-3">INGREDIENTS:</h5>
            <Row className="d-flex flex-column">
              <div>{modalRecipe.strIngredient1}</div>
              <div>{modalRecipe.strIngredient2}</div>
              <div>{modalRecipe.strIngredient3}</div>
              <div>{modalRecipe.strIngredient4}</div>
              <div>{modalRecipe.strIngredient5}</div>
              <div>{modalRecipe.strIngredient6}</div>
              <div>{modalRecipe.strIngredient7}</div>
            </Row>
          </Modal.Body>

          <a
            href={Recipe}
            download={Recipe}
            className="modalBtn-link d-flex justify-content-center mb-2"
          >
            <button className="d-flex justify-content-center modalBtn m-2 py-2">
              Download
            </button>
          </a>
        </Modal>
      ) : null}
    </>
  );
};

export default Items;
