import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6 text-center">Produkt nie znaleziony</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-40">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 font-playfair text-azzurro-brown">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <h2 className="text-2xl font-playfair mt-2">{product.discription}</h2>
        <p className="text-4xl mt-2">{product.price}</p>

        {/* PRZEKAZANIE NAZWY PRODUKTU DO FORMULARZA */}
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="font-playfair mt-6 inline-block px-6 py-3 bg-[#52220e] text-white rounded-lg hover:bg-[#3d1a0b] transition"
        >
          Zapytaj o produkt
        </Link>
      </div>

      <button
        className="font-playfair mt-6 px-6 py-3 bg-[#52220e] text-white rounded-lg hover:bg-[#3d1a0b] transition"
        onClick={() => navigate("/products")}
      >
        ← Powrót do listy produktów
      </button>
    </div>
  );
}
