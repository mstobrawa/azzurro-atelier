import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou(): React.ReactElement {
  return (
    <div className="max-w-lg mt-36 mx-auto p-8 bg-azzurro-cream rounded-lg shadow-lg font-playfair text-azzurro-brown tracking-wide text-center">
      <h2 className="text-3xl font-bold mb-4">Dziękujemy za wiadomość!</h2>
      <p className="mb-6">
        Twoja wiadomość została wysłana. Skontaktujemy się z Tobą najszybciej
        jak to możliwe.
      </p>
      <Link
        to="/"
        className="inline-block bg-azzurro-brown-light hover:bg-azzurro-contrast text-white font-semibold py-3 px-6 rounded-md transition"
      >
        Powrót do strony głównej
      </Link>
    </div>
  );
}
