import Stack from "../components/Stack";

const images = [
  {
    id: 1,
    img: "/images/stack/1.webp",
  },
  {
    id: 2,
    img: "/images/stack/2.webp",
  },
  {
    id: 3,
    img: "/images/stack/3.webp",
  },
  {
    id: 4,
    img: "/images/stack/4.webp",
  },
];

export default function Home() {
  return (
    <div className="pt-32 px-6 font-playfair text-azzurro-brown tracking-wider max-w-4xl mx-auto bg-azzurro-cream">
      <h1 className="text-4xl font-semibold mb-6 text-center">
        Witamy w Azzurro Atelier
      </h1>
      <p className="text-base md:text-lg leading-relaxed text-justify">
        Witamy w Azzurro Atelier – przestrzeni, gdzie włoska pasja i kobiecy
        temperament tworzą niepowtarzalną historię stylu. Nasza marka to hołd
        dla włoskiej tradycji rzemiosła, gdzie każda kolekcja powstaje z
        miłością do detali i szacunkiem dla piękna.
      </p>
      <div className="flex justify-center mt-6">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 300, height: 300 }}
          cardsData={images}
        />
      </div>
    </div>
  );
}
