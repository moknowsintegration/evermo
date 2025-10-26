import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesLanding from "./pages/ServicesLanding";
import TaxServices from "./pages/TaxServices";
import BusinessServices from "./pages/BusinessServices";
import HealthcareServices from "./pages/HealthcareServices";
import SpecializedServices from "./pages/SpecializedServices";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesLanding />} />
            <Route path="/services/tax" element={<TaxServices />} />
            <Route path="/services/business" element={<BusinessServices />} />
            <Route path="/services/healthcare" element={<HealthcareServices />} />
            <Route path="/services/specialized" element={<SpecializedServices />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
