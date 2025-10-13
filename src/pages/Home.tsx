import Stack from "../components/Stack";

const images = [
  { id: 1, img: "/images/stack/1.webp" },
  { id: 2, img: "/images/stack/2.webp" },
  { id: 3, img: "/images/stack/3.webp" },
  { id: 4, img: "/images/stack/4.webp" },
];

export default function Home() {
  return (
    <section className="min-h-screen bg-azzurro-cream font-playfair text-azzurro-brown tracking-wide px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-azzurro-contrast">
          Witamy w Azzurro Atelier
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-justify mb-12">
          Witamy w <span className="italic">Azzurro Atelier</span> –
          przestrzeni, gdzie włoska pasja i kobiecy temperament tworzą
          niepowtarzalną historię stylu. Nasza marka to hołd dla włoskiej
          tradycji rzemiosła, w której każda kolekcja powstaje z miłością do
          detali i szacunkiem dla piękna.
        </p>

        <div className="flex justify-center">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 300, height: 300 }}
            cardsData={images}
          />
        </div>
      </div>
    </section>
  );
}
