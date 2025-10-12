import { Instagram, Mail } from "lucide-react";

export default function Social() {
  return (
    <main className="min-h-screen bg-moon-cream flex flex-col items-center justify-center p-8 font-playfair text-azzurro-brown tracking-wide">
      <h1 className="text-4xl font-bold mb-6">Znajdź nas w sieci</h1>
      <p className="max-w-md text-center mb-10 text-lg">
        Obserwuj nas na Instagramie. Masz pytania? Napisz do nas maila. Bądź na
        bieżąco z najnowszymi kolekcjami i wyjątkowymi promocjami!
      </p>

      <div className="flex space-x-12">
        <a
          href="https://www.instagram.com/azzurro_atelier/" // zmień na swój link
          rel="noopener noreferrer"
          className="flex flex-col items-center text-azzurro-brown hover:text-moon-rose transition"
          aria-label="Instagram"
        >
          <Instagram size={48} />
          <span className="mt-2 text-lg font-semibold">Instagram</span>
        </a>

        <a
          href="mailto:kontakt.azzurro.atelier@gmail.com"
          className="flex flex-col items-center text-azzurro-brown hover:text-moon-rose transition"
          aria-label="Email"
        >
          <Mail size={48} />
          <span className="mt-2 text-lg font-semibold">Email</span>
        </a>
      </div>
    </main>
  );
}
