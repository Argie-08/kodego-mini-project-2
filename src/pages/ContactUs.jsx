import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Hero from "./Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ContactWallBack from "../assets/contactWall.jpg";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Container className="ContactBase">
        <div className="ContactWall"></div>
        <Form className="ContactForm p-5 ">
          <h4 className="text-center">CONTACT US</h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="mb-3"
            />
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 mb-4" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Your message for us ..."
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <a href="/home">
              <button className="px-5 py-1 contactButton">
                <b>SUBMIT</b>
              </button>
            </a>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ContactUs;
