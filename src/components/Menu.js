import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

// Sample Menu Data
const menuItems = [
  {
    id: 1,
    name: "Gadbad Ice Cream",
    category: "Ice Cream",
    description: "Layers of fruits, jelly, nuts, and ice cream.",
    price: 120,
    popularity: 5,
    rating: 4.8,
    isNew: false,
    img: "https://w0.peakpx.com/wallpaper/878/592/HD-wallpaper-ice-cream-pretty-delicious-strawberry-sweets-ice-cream-food-chocolate-beautiful-abstract-sweet-dessert-cute-graphy-vanilla.jpg",
  },
  {
    id: 2,
    name: "Tiramisu Delight",
    category: "Dessert",
    description: "Classic Italian dessert with a creamy twist.",
    price: 150,
    popularity: 4,
    rating: 4.6,
    isNew: true,
    img: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg",
  },
  {
    id: 3,
    name: "Tender Coconut Chill",
    category: "Ice Cream",
    description: "Smooth coconut ice cream made fresh.",
    price: 100,
    popularity: 3,
    rating: 4.2,
    isNew: true,
    img: "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Ficecream_sushinair_cover_3152023-1200.jpg?w=1024&auto=format%2Ccompress&fit=max",
  },
  // Add more items as needed...
];

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("None");
  const [cart, setCart] = useState([]);

  // Filtering Logic
  const filteredItems = menuItems.filter((item) => {
    if (filter === "Ice Cream") return item.category === "Ice Cream";
    if (filter === "Popular") return item.popularity >= 4;
    if (filter === "New") return item.isNew;
    return true;
  });

  // Sorting Logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "Price") return a.price - b.price;
    if (sortBy === "Popularity") return b.popularity - a.popularity;
    if (sortBy === "Rating") return b.rating - a.rating;
    return 0;
  });

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Explore Our Menu</h2>

      {/* Filters & Sort */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Ice Cream">Only Ice Creams</option>
            <option value="Popular">Popular Items</option>
            <option value="New">New Arrivals</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Select onChange={(e) => setSortBy(e.target.value)}>
            <option value="None">Sort By</option>
            <option value="Price">Price</option>
            <option value="Popularity">Popularity</option>
            <option value="Rating">Rating</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Menu Grid */}
      <Row>
        {sortedItems.map((item) => (
          <Col md={4} className="mb-4" key={item.id}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  <strong>₹{item.price}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
