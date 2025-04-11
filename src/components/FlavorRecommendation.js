import React, { useState } from "react";
import { Container, Card, Form, Button, Badge } from "react-bootstrap";

const flavorOptions = [
  "Chocolate",
  "Fruity",
  "Nutty",
  "Tropical",
  "Spicy",
  "Coffee",
  "Caramel",
  "Mint",
];

const recommendations = {
  Chocolate: ["Dark Choco Crunch", "Choco Lava Delight"],
  Fruity: ["Mango Tango", "Berry Blast"],
  Nutty: ["Cashew Carnival", "Pista Dream"],
  Tropical: ["Coconut Bliss", "Pineapple Swirl"],
  Spicy: ["Chili Choco Surprise"],
  Coffee: ["Espresso Crunch", "Mocha Mingle"],
  Caramel: ["Salted Caramel Swirl"],
  Mint: ["Minty Fresh"],
};

const FlavorRecommendation = () => {
  const [selectedPrefs, setSelectedPrefs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const togglePreference = (flavor) => {
    setSelectedPrefs((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const getRecommendation = () => {
    const picked = [];

    selectedPrefs.forEach((pref) => {
      if (recommendations[pref]) {
        picked.push(...recommendations[pref]);
      }
    });

    if (picked.length === 0) {
      alert("Please select at least one preference!");
      return;
    }

    const shuffled = picked.sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0, 2));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">🍦 Flavor Recommendation</h2>
      <Card className="p-4 shadow-sm mb-4">
        <h5>Select Your Flavor Preferences</h5>
        <div className="mb-3 mt-3">
          {flavorOptions.map((flavor) => (
            <Badge
              bg={selectedPrefs.includes(flavor) ? "primary" : "secondary"}
              key={flavor}
              onClick={() => togglePreference(flavor)}
              style={{
                cursor: "pointer",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            >
              {flavor}
            </Badge>
          ))}
        </div>
        <Button onClick={getRecommendation}>Get Recommendation</Button>
      </Card>

      {suggestions.length > 0 && (
        <Card className="p-4 shadow-sm">
          <h5>Recommended Flavors for You</h5>
          <ul>
            {suggestions.map((sugg, idx) => (
              <li key={idx}>{sugg}</li>
            ))}
          </ul>
        </Card>
      )}
    </Container>
  );
};

export default FlavorRecommendation;
