import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const offers = [
  {
    title: "Buy 1 Get 1 Free",
    description: "On all sundaes this weekend only!",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/assorted-ice-cream-deals-design-template-05e05489a6a7ae41a61cd905e31dbcf3_screen.jpg?ts=1634476532",
  },
  {
    title: "Summer Special 🍓",
    description: "20% off on all strawberry desserts.",
    image:
      "https://img.freepik.com/premium-psd/special-ice-cream-flavors-discount-offers-instagram-promotion-social-media-template_605333-142.jpg",
  },
  {
    title: "Combo Delight",
    description: "Get a coffee + brownie combo at just ₹99.",
    image:
      "https://d168jcr2cillca.cloudfront.net/uploadimages/vouchers/promocode-121108-CreamFudge_600x750_Banner.jpg",
  },
];

const Offers = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Special Offers & Promotions</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={offer.image}
                height="200"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Button variant="outline-primary">Grab Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
