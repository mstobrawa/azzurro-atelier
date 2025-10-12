import React from "react";
import { Link, useLocation } from "react-router-dom";

interface ContactFormProps {
  productName?: string;
}

function ContactForm({ productName }: ContactFormProps): React.ReactElement {
  return (
    <div className="max-w-lg mt-36 mx-auto p-8 bg-moon-cream rounded-lg shadow-lg font-playfair text-azzurro-brown tracking-wide">
      <h1 className="text-4xl font-bold mb-8 text-center">Kontakt</h1>

      <form
        name="contact"
        method="POST"
        action="/thankyou"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* wymagany hidden do identyfikacji formularza */}
        <input type="hidden" name="form-name" value="contact" />
        {/* jeśli formularz jest z produktu */}
        {productName && (
          <input type="hidden" name="product" value={productName} />
        )}

        {/* honeypot (ukryte pole) */}
        <p className="hidden">
          <label>
            Jeśli jesteś robotem, zostaw to pole puste:
            <input name="bot-field" />
          </label>
        </p>

        {/* widoczne pole produktu */}
        {productName && (
          <div className="mb-6">
            <label
              htmlFor="product"
              className="block mb-2 text-lg font-semibold"
            >
              Produkt
            </label>
            <input
              id="product"
              name="product-visible"
              type="text"
              value={productName}
              readOnly
              className="w-full px-4 py-3 border border-azzurro-brown rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-moon-rose transition"
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

        {/* RODO */}
        <div className="mb-6 text-sm text-gray-700">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="rodo"
              required
              className="mt-1 accent-[#52220e]"
            />
            <span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
              kontaktu w sprawie zapytania. Administratorem danych jest Azzurro
              Atelier. Więcej informacji znajdziesz w{" "}
              <Link
                to="/terms"
                className="underline text-[#52220e] hover:text-[#3d1a0b]"
              >
                Polityce prywatności
              </Link>
              .
            </span>
          </label>
        </div>

        {/* przycisk */}
        <button
          type="submit"
          className="w-full bg-azzurro-brown-light hover:bg-azzurro-contrast text-white font-semibold py-3 rounded-md hover:bg-moon-rose-dark transition"
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default function Contact(): React.ReactElement {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productNameFromUrl = params.get("product") || undefined;

  return <ContactForm productName={productNameFromUrl} />;
}
