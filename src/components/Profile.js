import React from "react";
import { Container, Card, Row, Col, ListGroup, Button } from "react-bootstrap";

const mockUser = {
  name: "Arjun",
  email: "arjun@example.com",
  favorites: ["Gadbad Ice Cream", "Tiramisu Delight"],
  orderHistory: [
    { id: 1, date: "2025-04-01", total: 270 },
    { id: 2, date: "2025-03-28", total: 120 },
  ],
};

const Profile = () => {
  const { name, email, favorites, orderHistory } = mockUser;

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Your Profile</h2>

      <Card className="mb-4 shadow-sm p-3">
        <h4>{name}</h4>
        <p>{email}</p>
      </Card>

      <Row>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Header>❤️ Favorite Items</Card.Header>
            <ListGroup variant="flush">
              {favorites.map((item, idx) => (
                <ListGroup.Item key={idx}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Header>🧾 Order History</Card.Header>
            <ListGroup variant="flush">
              {orderHistory.map((order) => (
                <ListGroup.Item key={order.id}>
                  Order #{order.id} — {order.date} — ₹{order.total}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Button variant="outline-secondary" className="mt-3">
        Edit Profile (Coming Soon)
      </Button>
    </Container>
  );
};

export default Profile;
