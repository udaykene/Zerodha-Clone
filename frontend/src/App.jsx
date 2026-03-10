import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ProductsPage from "./pages/ProductsPage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
