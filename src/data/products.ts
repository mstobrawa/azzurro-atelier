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
    name: "Kolczyki Perla",
    price: "39.99 zł z VAT",
    discription:
      "Eleganckie kolczyki z masy perłwej z subtelnym złotym zapięcięm.",
    image: "/images/products/01.webp",
    slug: "kolczyki-perla-01",
  },
  {
    id: 2,
    name: "Kolczyki Ambra",
    price: "34.99 zł z VAT",
    image: "/images/products/02.webp",
    slug: "kolczyki-ambra-02",
  },
  {
    id: 3,
    name: "Kolczyki Fiore",
    price: "44.99 zł z VAT",
    image: "/images/products/03.webp",
    slug: "kolczyki-fiore-03",
  },
  {
    id: 4,
    name: "Kolczyki Nero Modesto",
    price: "29.99 zł z VAT",
    image: "/images/products/04.webp",
    slug: "kolczyki-nero-modesto-04",
  },
  {
    id: 5,
    name: "Kolczyki Cuori",
    price: "44.99 zł z VAT",
    image: "/images/products/05.webp",
    slug: "kolczyki-cuori-05",
  },
  {
    id: 6,
    name: "Kolczyki Bozzolo Dorato",
    price: "49.99 zł z VAT",
    image: "/images/products/06.webp",
    slug: "kolczyki-bozzolo-dorato-06",
  },
  {
    id: 7,
    name: "Kolczyki Cuori Neri",
    price: "39.99 zł z VAT",
    image: "/images/products/07.webp",
    discription: "Chwilowy brak na stanie - Zapytaj o dostępność",
    slug: "kolczyki-cuori-neri-07",
  },
];
