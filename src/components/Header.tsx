import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  logo: string;
  title: string;
  links: NavLink[];
};

export default function Header({ logo, title, links }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed w-full z-50 bg-[#f0e8db]/90 backdrop-blur-md text-[#52220e] shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo + Nazwa */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt={title} className="w-10 h-10 object-contain" />
            <span className="text-lg font-bold">{title}</span>
          </div>

          {/* Burger menu */}
          <button
            className="md:hidden focus:outline-none transition-transform duration-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X
                size={28}
                className="transition-transform duration-300 rotate-90"
              />
            ) : (
              <Menu
                size={28}
                className="transition-transform duration-300 rotate-0"
              />
            )}
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:underline hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Ciemne tło przy otwartym menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 animate-fadeIn"
          onClick={closeMenu}
        />
      )}

      {/* Menu mobilne wysuwane z prawej */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f0e8db]/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 border-b border-[#52220e]/20 hover:bg-[#f0e8db]/60 rounded-lg transition"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
