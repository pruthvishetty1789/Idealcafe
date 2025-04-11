import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const dummyOrder = [
  { id: 1, name: "Gadbad Ice Cream", price: 120, quantity: 1 },
  { id: 2, name: "Tiramisu Delight", price: 150, quantity: 2 },
];

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deliveryOption: "Dine-In",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const totalPrice = dummyOrder.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);

    // ✅ Redirect to Order Tracker after 3 seconds
    setTimeout(() => {
      navigate("/track");
    }, 3000);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Checkout</h2>

      {!submitted ? (
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Delivery Option</Form.Label>
                <Form.Select
                  name="deliveryOption"
                  value={formData.deliveryOption}
                  onChange={handleChange}
                >
                  <option value="Dine-In">Dine-In</option>
                  <option value="Takeaway">Takeaway</option>
                </Form.Select>
              </Form.Group>

              <Button variant="success" type="submit">
                Confirm Order
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4>Order Summary</h4>
                <ul className="list-unstyled">
                  {dummyOrder.map((item) => (
                    <li key={item.id}>
                      {item.name} × {item.quantity} = ₹
                      {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <hr />
                <h5>Total: ₹{totalPrice}</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Card className="p-4 shadow text-center">
          <h3>Thank you, {formData.name}!</h3>
          <p>
            Your order has been placed for{" "}
            <strong>{formData.deliveryOption}</strong>.
          </p>
          <p>Redirecting you to track your order...</p>
        </Card>
      )}
    </Container>
  );
};

export default Checkout;
