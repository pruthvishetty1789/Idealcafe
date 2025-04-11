import React, { useEffect, useState } from "react";
import { Container, Card, Image } from "react-bootstrap";
import "./IceCreamOfTheDay.css";

const flavors = [
  "Gadbad Ice Cream",
  "Tiramisu Delight",
  "Berry Blast",
  "Tender Coconut Chill",
  "Dark Chocolate Fudge",
  "Mango Mania",
  "Nutty Butty Crunch",
];

const flavorImages = {
  "Gadbad Ice Cream":
    "https://t4.ftcdn.net/jpg/03/01/32/05/360_F_301320563_tiMkr0aH4Ned699JMTUqjvLEXW25RvoB.jpg",
  "Tiramisu Delight":
    "https://www.davidlebovitz.com/wp-content/uploads/2014/07/Ricotta-ice-cream-recipe-6.jpg",
  "Berry Blast":
    "https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_640.jpg",
  "Tender Coconut Chill":
    "https://i.pinimg.com/550x/ef/5a/ff/ef5aff84e42224739cb33850fedcecba.jpg",
  "Dark Chocolate Fudge":
    "https://t3.ftcdn.net/jpg/03/01/32/04/360_F_301320484_p3IbycGlgzoSl6rML0XuvT7wTtpmXCdC.jpg",
  "Mango Mania":
    "https://frolicandfare.com/wp-content/uploads/2021/05/cover-image-of-lavender-honey-ice-cream-1200-x1200.jpg",
  "Nutty Butty Crunch":
    "https://m.media-amazon.com/images/I/71vDmQvWwBL._AC_UF894,1000_QL80_.jpg",
};

const IceCreamOfTheDay = () => {
  const [flavor, setFlavor] = useState("");

  useEffect(() => {
    const today = new Date().toDateString();
    const saved = JSON.parse(localStorage.getItem("iceCreamOfTheDay"));

    if (saved && saved.date === today) {
      setFlavor(saved.flavor);
    } else {
      const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
      localStorage.setItem(
        "iceCreamOfTheDay",
        JSON.stringify({ date: today, flavor: randomFlavor })
      );
      setFlavor(randomFlavor);
    }
  }, []);

  return (
    <Container className="icecream-container">
      <Card className="icecream-card">
        <h2 className="icecream-title">🍨 Ice Cream of the Day</h2>
        <h4 className="icecream-flavor">{flavor}</h4>

        {flavor && flavorImages[flavor] && (
          <Image
            src={flavorImages[flavor]}
            alt={flavor}
            className="icecream-image"
            fluid
          />
        )}

        <p className="icecream-note">Come try it today at Ideal Café!</p>
      </Card>
    </Container>
  );
};

export default IceCreamOfTheDay;
