import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navigation from "./components/Navigation";
import "./App.css";
import Card from "react-bootstrap/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
