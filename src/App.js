import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CafeNavbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import AdminDashboard from "./components/AdminDashboard";
import Profile from "./components/Profile";
import FlavorRecommendation from "./components/FlavorRecommendation";
import IceCreamOfTheDay from "./components/IceCreamOfTheDay";
import OrderTracker from "./components/OrderTracker";
import Offers from "./components/Offers";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <CafeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/flavors" element={<FlavorRecommendation />} />
        <Route path="/daily" element={<IceCreamOfTheDay />} />
        <Route path="/tracker" element={<OrderTracker />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
