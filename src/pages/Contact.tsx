import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// -------------------------
// Komponent formularza
// -------------------------
interface ContactFormProps {
  productName?: string;
}

function ContactForm({ productName }: ContactFormProps): React.ReactElement {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="max-w-lg mt-40 mx-auto p-8 bg-moon-cream rounded-lg shadow-lg font-playfair text-azzurro-brown tracking-wide text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Dziękujemy za wiadomość!
        </h2>
        {productName ? (
          <p>
            Otrzymaliśmy Twoje zapytanie dotyczące:{" "}
            <span className="font-bold">{productName}</span>.
          </p>
        ) : (
          <p>Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
        )}
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-lg mt-36 mx-auto p-8 bg-moon-cream rounded-lg shadow-lg font-playfair text-azzurro-brown tracking-wide"
    >
      <input type="hidden" name="form-name" value="contact" />
      {productName && (
        <input type="hidden" name="product" value={productName} />
      )}

      {/* honeypot */}
      <p className="hidden">
        <label>
          Jeśli jesteś robotem, zostaw to pole puste:
          <input name="bot-field" />
        </label>
      </p>

      {/* widoczne pole produktu */}
      {productName && (
        <div className="mb-6">
          <label htmlFor="product" className="block mb-2 text-lg font-semibold">
            Produkt
          </label>
          <input
            id="product"
            name="product-visible"
            type="text"
            value={productName}
            readOnly
            className="w-full px-4 py-3 border border-azzurro-brown rounded-md focus:outline-none focus:ring-2 focus:ring-moon-rose transition bg-gray-100"
          />
        </div>
      )}

      {/* imię */}
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-lg font-semibold">
          Imię
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Twoje imię"
          className="w-full px-4 py-3 border border-azzurro-brown rounded-md focus:outline-none focus:ring-2 focus:ring-moon-rose transition"
        />
      </div>

      {/* email */}
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-lg font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="twoj@email.pl"
          className="w-full px-4 py-3 border border-azzurro-brown rounded-md focus:outline-none focus:ring-2 focus:ring-moon-rose transition"
        />
      </div>

      {/* wiadomość */}
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-lg font-semibold">
          Treść wiadomości
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Napisz wiadomość..."
          className="w-full px-4 py-3 border border-azzurro-brown rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-moon-rose transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-azzurro-brown-light hover:bg-azzurro-contrast text-white font-semibold py-3 rounded-md hover:bg-moon-rose-dark transition"
      >
        Wyślij
      </button>
    </form>
  );
}

// -------------------------
// Strona kontaktowa
// -------------------------
export default function Contact(): React.ReactElement {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productNameFromUrl = params.get("product") || undefined;

  return <ContactForm productName={productNameFromUrl} />;
}
