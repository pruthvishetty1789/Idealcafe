import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We serve the most delicious treats and beverages in town. Quality
              and taste in every bite!
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@icecreamlove.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>Instagram | Facebook | Twitter</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} IceCreamLove. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
