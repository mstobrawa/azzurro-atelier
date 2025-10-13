import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type NavLink = {
  label: string;
  to: string;
};

type HeaderProps = {
  logo: string;
  title: string;
  links: NavLink[];
};

export default function Header({ logo, title, links }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Zamyka menu po zmianie rozmiaru okna (np. powrót do desktopu)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Główne nagłówkowe menu */}
      <header className="fixed w-full z-50 bg-azzurro-cream text-azzurro-brown shadow-md font-playfair tracking-wide">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo + nazwa */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt={title} className="w-16 h-16 object-contain" />
            <span className="text-4xl font-bold">{title}</span>
          </Link>

          {/* Burger menu (mobile) */}
          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-8 text-lg font-semibold">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-azzurro-brown-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Ciemne tło po otwarciu menu mobilnego */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobilne */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-azzurro-cream text-azzurro-brown z-50 transform transition-transform duration-300 ease-in-out shadow-lg border-l border-azzurro-brown/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8 space-y-5 font-semibold text-lg">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-azzurro-brown/10 hover:text-azzurro-brown-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
