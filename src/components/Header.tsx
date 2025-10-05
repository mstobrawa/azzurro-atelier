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

  // ✅ Zamyka menu, gdy wracamy do szerokiego widoku (np. desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 bg-[#f0e8db] font-playfair tracking-wide font-bold backdrop-blur-md text-[#52220e] shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo + Nazwa */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt={title} className="w-20 h-20 object-contain" />
            <span className="text-5xl font-bold">{title}</span>
          </Link>

          {/* Burger menu (mobile) */}
          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 font-playfair">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:underline hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Tło przy otwartym menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobilne */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f0e8db]/90 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 border-b border-[#52220e]/20 hover:bg-
                          "
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
