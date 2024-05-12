import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "./Foodcraving.css";

const Foodcraving = () => {
  const [cravingData, setCravingData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [cravingRecipe, setCravingRecipe] = useState({});

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  async function getData() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    const data = await response.json();
    const newGetData = data.categories.filter((recipe, index) => {
      return index < 3;
    });
    setCravingData(newGetData);
    // console.log(newGetData);
  }

  function exploreRecipeModal(exploreRecipe) {
    setCravingRecipe(exploreRecipe);
    setLgShow(true);
  }

  return (
    <Container className="mb-5">
      <h5 className="mb-5 mt-3 cravingText">WHAT WE'RE CRAVING</h5>
      <Row className="g-0">
        {cravingData.map((detail, index) => {
          return (
            <Col sm={12} lg={4} className="cardBox" key={index}>
              <Card
                className="cardTemplate rounded-0 border-0 border-end border-start border-1 border-dark "
                onClick={() => exploreRecipeModal(detail)}
              >
                <Card.Img
                  variant="top"
                  src={detail.strCategoryThumb}
                  className="cardImage py-0 px-4"
                />
                <Card.Body className="text-center">
                  <Card.Title className="craveText">
                    {detail.strCategory}
                  </Card.Title>
                </Card.Body>
                <div className="overlayCrave"></div>
              </Card>
            </Col>
          );
        })}
      </Row>
      {cravingRecipe ? (
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Row className="modalRow p-2">
            <Col sm={6} className="modalBox p-0">
              <img
                src={cravingRecipe.strCategoryThumb}
                alt=""
                className="modalPic"
              />
            </Col>

            <Col sm={6} className="modalBox2">
              <div className="modalClose mb-3">
                <h3 className="modalText">{cravingRecipe.strCategory}</h3>
                <Modal.Header
                  closeButton
                  className="modalHeader"
                ></Modal.Header>
              </div>
              <p>{cravingRecipe.strCategoryDescription}</p>
            </Col>
          </Row>
        </Modal>
      ) : null}
    </Container>
  );
};

export default Foodcraving;
