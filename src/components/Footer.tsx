type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  title: string;
  links: FooterLink[];
  contactEmail: string;
  contactPhone?: string;
};

export default function Footer({
  title,
  links,
  contactEmail,
  contactPhone,
}: FooterProps) {
  return (
    <footer className="bg-azzurro-brown text-azzurro-cream font-playfair">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* Logo / Nazwa */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
          <p className="text-sm mt-3 text-azzurro-cream/80 leading-relaxed">
            Biżuteria z pasją i elegancją — Azzurro Atelier.
          </p>
        </div>

        {/* Linki */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-azzurro-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
          <p className="text-sm">📧 {contactEmail}</p>
          {contactPhone && <p className="text-sm mt-1">📞 {contactPhone}</p>}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-azzurro-cream/30 py-4 text-center text-xs text-azzurro-cream/70">
        © {new Date().getFullYear()} {title}. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
