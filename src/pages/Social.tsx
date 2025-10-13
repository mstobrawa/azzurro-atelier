import { Instagram, Mail } from "lucide-react";

export default function Social() {
  return (
    <main className="min-h-screen bg-azzurro-cream flex flex-col items-center justify-center p-8 font-playfair text-azzurro-brown tracking-wide">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Znajdź nas w sieci
      </h1>
      <p className="max-w-md text-center mb-10 text-lg leading-relaxed">
        Obserwuj nas na Instagramie. Masz pytania? Napisz do nas maila. Bądź na
        bieżąco z najnowszymi kolekcjami i wyjątkowymi promocjami!
      </p>

      <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-6 sm:space-y-0">
        <a
          href="https://www.instagram.com/azzurro_atelier/"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-azzurro-brown hover:text-azzurro-contrast transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={48} />
          <span className="mt-2 text-lg font-semibold">Instagram</span>
        </a>

        <a
          href="mailto:kontakt.azzurro.atelier@gmail.com"
          className="flex flex-col items-center text-azzurro-brown hover:text-azzurro-contrast transition-colors"
          aria-label="Email"
        >
          <Mail size={48} />
          <span className="mt-2 text-lg font-semibold">Email</span>
        </a>
      </div>
    </main>
  );
}
