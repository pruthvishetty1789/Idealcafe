import React, { useEffect, useState } from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";

const statusSteps = [
  { status: "Order Placed", progress: 10 },
  { status: "Preparing Your Ice Cream 🍨", progress: 40 },
  { status: "Out for Delivery 🚚", progress: 70 },
  { status: "Delivered ✅", progress: 100 },
];

const OrderTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < statusSteps.length - 1) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 3000); // progress every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const { status, progress } = statusSteps[currentStep];

  return (
    <Container className="mt-4">
      <Card className="p-4 text-center shadow-sm">
        <h2>🔄 Order Tracker</h2>
        <p className="mt-3 fs-5">{status}</p>
        <ProgressBar now={progress} label={`${progress}%`} animated striped />
      </Card>
    </Container>
  );
};

export default OrderTracker;
