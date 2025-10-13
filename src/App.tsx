import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";

import logo from "../public/images/logo/logo.webp";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-playfair text-azzurro-brown">
        <Header
          logo={logo}
          title="Azzurro Atelier"
          links={[
            { label: "Strona główna", to: "/" },
            { label: "Produkty", to: "/products" },
            { label: "O nas", to: "/about" },
            { label: "Kontakt", to: "/contact" },
            { label: "Social Media", to: "/social" },
          ]}
        />

        <main className="flex-grow bg-azzurro-cream">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </main>

        <Footer
          title="Azzurro Atelier"
          links={[
            { label: "O nas", href: "/about" },
            { label: "Kontakt", href: "/contact" },
            { label: "Social media", href: "/social" },
            { label: "Regulamin", href: "/terms" },
          ]}
          contactEmail="kontakt.azzurro.atelier@gmail.com"
        />
      </div>
    </Router>
  );
}
