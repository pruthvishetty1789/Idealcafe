import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Table,
  Row,
  Col,
} from "react-bootstrap";

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Gadbad Ice Cream", category: "Ice Cream", price: 120 },
    { id: 2, name: "Tiramisu Delight", category: "Dessert", price: 150 },
  ]);

  const [form, setForm] = useState({
    name: "",
    category: "Ice Cream",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      alert("Please fill all fields");
      return;
    }
    const newItem = {
      id: menuItems.length + 1,
      name: form.name,
      category: form.category,
      price: parseFloat(form.price),
    };
    setMenuItems([newItem, ...menuItems]);
    setForm({ name: "", category: "Ice Cream", price: "" });
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Add New Menu Item */}
      <Card className="p-4 mb-4 shadow-sm">
        <h5>Add New Menu Item</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Item name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Ice Cream</option>
                  <option>Dessert</option>
                  <option>Snack</option>
                  <option>Beverage</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Card>

      {/* Menu Items Table */}
      <Card className="p-4 shadow-sm">
        <h5>Menu Items</h5>
        <Table responsive bordered className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AdminDashboard;
