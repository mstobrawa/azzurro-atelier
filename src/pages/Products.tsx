import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="container mx-auto px-4 pt-40">
      <h1 className="text-3xl font-playfair font-bold mb-6 text-center">
        Nasze produkty
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
