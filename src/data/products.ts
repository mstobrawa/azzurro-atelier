export type Product = {
  id: number;
  name: string;
  price: string;
  discription?: string;
  image: string;
  slug: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Kolczyki Azzurro",
    price: "39.99 zł",
    discription:
      "Eleganckie kolczyki z masy perłwej z subtelnym złotym zapięcięm.",
    image: "/images/products/01.webp",
    slug: "kolczyki-azzurro-01",
  },
  {
    id: 2,
    name: "Kolczyki Moon",
    price: "80 zł",
    image: "https://via.placeholder.com/300x200?text=Kolczyki",
    slug: "Kolczyki-moon",
  },
  {
    id: 3,
    name: "Kolczyki Atelier",
    price: "95 zł",
    image: "https://via.placeholder.com/300x200?text=Kolczyki",
    slug: "kolczyki-atelier",
  },
];
