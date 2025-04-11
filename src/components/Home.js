import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import IceCreamOfTheDay from "./IceCreamOfTheDay";
import "./Home.css";
import Footer from "./Footer";

import FlavorRecommendation from "./FlavorRecommendation";

const Home = () => {
  const popularDishes = [
    {
      name: "Gadbad",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2023/06/homemade-ice-cream-recipe.jpg",
    },
    {
      name: "Tiramisu Ice Cream",
      image:
        "https://c4.wallpaperflare.com/wallpaper/851/988/1008/ice-cream-4k-beautiful-hd-quality-wallpaper-thumb.jpg",
    },
    {
      name: "Tender Coconut Delight",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EbmlHwN8w2Ln8RnhdnIAAsBen2j_n5pnjg&s",
    },
  ];

  return (
    <Container className="mt-4">
      {/* Hero Banner */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/37/78/d7/3778d7d1be1cffaad3b35da51680218f.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Award-Winning Gadbad 🍨</h3>
            <p>The legendary ice cream experience of Mangalore!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1264447431/photo/strawberry-ice-cream-with-fresh-strawberries.jpg?s=612x612&w=0&k=20&c=Bqq2nPDJ-gZHUHy4Eg4RugVi-8bg1lJb4B66sY2VHzk="
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Exotic Seasonal Flavors</h3>
            <p>Fresh fruit blends you won't find anywhere else!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Dishes */}
      <h2 className="mb-4">Popular Dishes</h2>
      <Row className="mb-5">
        {popularDishes.map((item, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Delicious, creamy, and crowd favorite!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Customer Testimonials */}
      <h2 className="mb-4">What Our Customers Say</h2>
      <Row className="mb-5">
        {["Asha", "Rahul", "Meera"].map((name, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Text>
                  "Absolutely loved the ice creams! Unique flavors and great
                  service."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">- {name}, ★★★★★</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <FlavorRecommendation />
      {/* Exclusive Offers */}
      <h2 className="mb-4">Exclusive Offers</h2>
      <Row className="mb-5">
        <Col md={6}>
          <Card className="bg-warning text-white text-center shadow">
            <Card.Body>
              <h4>🍦 Happy Hours!</h4>
              <p>Get 20% off between 3–5 PM every weekday!</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-info text-white text-center shadow">
            <Card.Body>
              <h4>🎉 Summer Specials</h4>
              <p>Try our new mango & lychee combos!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ice Cream of the Day */}
      <IceCreamOfTheDay />
      <Footer />
    </Container>
  );
};

export default Home;
