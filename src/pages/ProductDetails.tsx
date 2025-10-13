import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-azzurro-cream font-playfair text-azzurro-brown">
        <p className="text-xl">Produkt nie został znaleziony.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-azzurro-cream font-playfair text-azzurro-brown pt-40 px-6 pb-20">
      <div className="max-w-2xl mx-auto bg-azzurro-white rounded-2xl shadow-lg p-8 text-center">
        {/* Zdjęcie produktu */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg mb-6 shadow-md"
        />

        {/* Nazwa i opis */}
        <h1 className="text-4xl font-bold mb-2 text-azzurro-contrast">
          {product.name}
        </h1>
        <h2 className="text-xl mb-4 opacity-90">{product.description}</h2>
        <p className="text-3xl font-semibold mb-8">{product.price}</p>

        {/* Link do formularza kontaktowego */}
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-block px-8 py-3 bg-azzurro-brown text-azzurro-cream rounded-lg font-semibold hover:bg-azzurro-contrast transition"
        >
          Zapytaj o produkt
        </Link>

        {/* Przycisk powrotu */}
        <button
          onClick={() => navigate("/products")}
          className="mt-6 block w-full md:w-auto mx-auto px-8 py-3 bg-azzurro-brown-light text-azzurro-cream rounded-lg font-semibold hover:bg-azzurro-contrast transition"
        >
          ← Powrót do listy produktów
        </button>
      </div>
    </section>
  );
}
