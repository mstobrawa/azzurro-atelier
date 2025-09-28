import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import logo from "./assets/logo.webp";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social href={undefined} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
          </Routes>
        </main>

        <Footer
          title="AZZURRO Atelier"
          links={[
            { label: "O nas", href: "/about" },
            { label: "Kontakt", href: "/contact" },
            { label: "Social media", href: "/social" },
          ]}
          contactEmail="kontakt@azzurro-atelier.pl"
          contactPhone="+48 123 456 789"
        />
      </div>
    </Router>
  );
}
