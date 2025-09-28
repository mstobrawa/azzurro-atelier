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
    <footer className="bg-azzurro-brown text-azzurro-cream mt-12 font-playfair">
      <div className="max-w-6xl mx-auto px-6 py-8 grid gap-8 md:grid-cols-3">
        {/* Logo / Nazwa */}
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm mt-2 opacity-80">
            Biżuteria z pasją i elegancją — Azzurro Atelier.
          </p>
        </div>

        {/* Linki */}
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:underline hover:opacity-80 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-semibold mb-3">Kontakt</h3>
          <p className="text-sm">📧 {contactEmail}</p>
          {contactPhone && <p className="text-sm">📞 {contactPhone}</p>}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-azzurro-cream/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {title}. All rights reserved.
      </div>
    </footer>
  );
}
