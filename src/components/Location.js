import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Location = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Location</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h4>Visit Us</h4>
            <p>
              <strong>Address:</strong> 123 Ice Cream Street, Foodville, FL
              54321
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> contact@icecreamlovers.com
            </p>
            <p>
              <strong>Hours:</strong>
            </p>
            <ul>
              <li>Mon - Fri: 9:00 AM – 9:00 PM</li>
              <li>Sat - Sun: 10:00 AM – 10:00 PM</li>
            </ul>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-2 shadow-sm">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.182345186048!2d-122.41941508468142!3d37.77492927975806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74b5d9f5%3A0x7e04f13c72c2c681!2sIce%20Cream%20Shop!5e0!3m2!1sen!2sus!4v1648774127651!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
