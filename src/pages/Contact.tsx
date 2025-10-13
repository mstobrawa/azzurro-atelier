import React from "react";
import { Link, useLocation } from "react-router-dom";

interface ContactFormProps {
  productName?: string;
}

function ContactForm({ productName }: ContactFormProps): React.ReactElement {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    }).then(() => {
      window.location.href = "/thankyou";
    });
  };

  return (
    <section className="min-h-screen bg-azzurro-cream font-playfair text-azzurro-brown tracking-wide px-6 pt-32 pb-20">
      <div className="max-w-lg mx-auto bg-azzurro-white rounded-2xl shadow-lg p-8 border border-azzurro-brown/20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-10 text-center text-azzurro-contrast">
          Kontakt
        </h1>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/"
          onSubmit={handleSubmit}
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
                className="w-full px-4 py-3 border border-azzurro-brown rounded-md bg-azzurro-cream focus:outline-none focus:ring-2 focus:ring-azzurro-brown-light transition"
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
              className="w-full px-4 py-3 border border-azzurro-brown rounded-md focus:outline-none focus:ring-2 focus:ring-azzurro-brown-light transition"
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
              className="w-full px-4 py-3 border border-azzurro-brown rounded-md focus:outline-none focus:ring-2 focus:ring-azzurro-brown-light transition"
            />
          </div>

          {/* wiadomość */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-semibold"
            >
              Treść wiadomości
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Napisz wiadomość..."
              className="w-full px-4 py-3 border border-azzurro-brown rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-azzurro-brown-light transition"
            />
          </div>

          {/* zgoda RODO */}
          <div className="mb-8 text-sm leading-relaxed">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="rodo"
                required
                className="mt-1 accent-azzurro-brown"
              />
              <span>
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                kontaktu w sprawie zapytania. Administratorem danych jest{" "}
                <span className="italic">Azzurro Atelier</span>. Więcej
                informacji znajdziesz w{" "}
                <Link
                  to="/terms"
                  className="underline text-azzurro-brown hover:text-azzurro-contrast"
                >
                  Polityce prywatności
                </Link>
                .
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-azzurro-brown-light hover:bg-azzurro-contrast text-azzurro-white font-semibold py-3 rounded-md transition"
          >
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Contact(): React.ReactElement {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productNameFromUrl = params.get("product") || undefined;

  return <ContactForm productName={productNameFromUrl} />;
}
