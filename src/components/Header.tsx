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

  return (
    <>
      <header className="fixed w-full z-50 bg-[#f0e8db]/40 backdrop-blur-md text-[#52220e] shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo + Nazwa */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt={title} className="w-10 h-10 object-contain" />
            <span className="text-lg font-bold">{title}</span>
          </div>

          {/* Burger menu */}
          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobilne wysuwane z prawej */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f0e8db]/90 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 border-b border-[#52220e]/20 hover:bg-[#f0e8db]/60 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
