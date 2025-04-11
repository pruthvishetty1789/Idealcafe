import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Gadbad Ice Cream",
    price: 120,
    quantity: 1,
    img: "https://images.squarespace-cdn.com/content/v1/599ffa88cd0f68882d4efcbd/1506562344416-CYHQRQ1XHGRGL1Q0O6XL/strawberry-icecream-7145.jpg",
  },
  {
    id: 2,
    name: "Tiramisu Delight",
    price: 150,
    quantity: 2,
    img: "https://aromaticessence.co/wp-content/uploads/2021/02/Strawberry_cream_1.jpg",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container className="mt-4">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <Card className="text-center p-4 shadow-sm">
          <p>Your cart is empty 🍦</p>
        </Card>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col md={6} key={item.id}>
                <Card className="mb-4 shadow-sm">
                  <Row className="g-0 align-items-center">
                    <Col xs={12} md={4}>
                      <Card.Img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid rounded-start"
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </Col>
                    <Col xs={12} md={8}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>₹{item.price} each</Card.Text>
                        <div className="d-flex align-items-center mb-3">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            −
                          </Button>
                          <span className="mx-3">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          <Card className="p-4 mt-4 shadow-sm text-center">
            <h4>Total: ₹{totalPrice}</h4>
            <Button
              variant="success"
              className="mt-3"
              onClick={() => navigate("/checkout")} //
            >
              Proceed to Checkout
            </Button>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Cart;
