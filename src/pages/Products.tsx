import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="container mx-auto px-4 pt-32 font-playfair text-azzurro-brown">
      <h1 className="text-4xl font-playfair font-bold mb-6 text-center tracking-wider">
        Nasze produkty
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="block bg-white rounded-2xl shadow-md p-6 transition-shadow hover:shadow-md" // cień i padding jak w ProductDetails
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg" // spójne z ProductDetails
              loading="lazy"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              {product.discription && (
                <h3 className="text-md font-playfair mb-1">
                  {product.discription}
                </h3>
              )}
              <p className="text-azzurro-brown text-2xl">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
