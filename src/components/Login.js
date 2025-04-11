import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ⬅️ Import navigate hook

const Login = () => {
  const navigate = useNavigate(); // ⬅️ Initialize navigate
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all required fields.");
      return;
    }

    if (isSignup) {
      if (!formData.name || formData.password !== formData.confirmPassword) {
        alert("Passwords don't match or name is empty.");
        return;
      }
      alert(`Signed up as ${formData.name}!`);
      navigate("/profile"); // ⬅️ Go to Profile after sign up
    } else {
      alert(`Logged in as ${formData.email}`);
      navigate("/profile"); // ⬅️ Go to Profile after login
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "500px" }}>
      <Card className="p-4 shadow-sm">
        <h3 className="text-center mb-4">{isSignup ? "Sign Up" : "Log In"}</h3>
        <Form onSubmit={handleSubmit}>
          {isSignup && (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {isSignup && (
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Button variant="primary" type="submit" className="w-100">
            {isSignup ? "Sign Up" : "Log In"}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <Button variant="link" onClick={toggleMode}>
            {isSignup
              ? "Already have an account? Log in"
              : "Don't have an account? Sign up"}
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
