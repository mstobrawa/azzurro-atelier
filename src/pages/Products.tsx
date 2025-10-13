import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="pt-32 px-4 font-playfair text-azzurro-brown max-w-6xl mx-auto bg-azzurro-cream">
      <h1 className="text-4xl font-bold mb-6 text-center tracking-wide text-azzurro-contrast">
        Nasze produkty
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="block bg-azzurro-white rounded-2xl shadow-md p-4 md:p-6 transition-transform hover:scale-105 duration-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              {product.discription && (
                <h3 className="text-md mb-1 text-azzurro-brown/80">
                  {product.discription}
                </h3>
              )}
              <p className="text-2xl font-bold">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
