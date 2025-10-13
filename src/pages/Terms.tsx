import React from "react";

export default function Terms(): React.ReactElement {
  return (
    <div className="container mx-auto px-6 pt-32 max-w-3xl font-playfair text-azzurro-brown">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Regulamin sklepu Azzurro Atelier
      </h1>

      {/* 1. Postanowienia ogólne */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Postanowienia ogólne</h2>
        <p>
          Niniejszy regulamin określa zasady korzystania ze sklepu internetowego
          Azzurro Atelier oraz składania zamówień. Korzystanie ze sklepu oznacza
          akceptację niniejszych warunków.
        </p>
      </section>

      {/* 2. Produkty i ceny */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Produkty i ceny</h2>
        <p>
          Wszystkie produkty prezentowane w sklepie są własnością Azzurro
          Atelier. Ceny podawane są w PLN i zawierają podatek VAT, jeśli jest
          wymagany.
        </p>
      </section>

      {/* 3. Zamówienia i płatności */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Zamówienia i płatności
        </h2>
        <p>
          Zamówienia realizowane są po przesłaniu formularza kontaktowego z
          wybranym produktem. Sklep nie posiada zintegrowanych płatności online,
          dlatego płatność odbywa się po wysłaniu potwierdzenia zamówienia.
          Możliwe formy płatności:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Blik</li>
          <li>Przelew tradycyjny na konto bankowe</li>
        </ul>
      </section>

      {/* 4. Wysyłka */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Wysyłka</h2>
        <p>Wysyłka zamówienia następuje po otrzymaniu płatności.</p>
        <p>
          Produkty wysyłane są wyłącznie za pośrednictwem InPost, w szczególnych
          przypadkach na życzenie klienta możliwa inna forma wysyłki. Koszt
          wysyłki (Mini Paczka: 11,99 zł) oraz czas doręczenia podawany jest w
          indywidualnej wiadomości e-mail po otrzymaniu zamówienia.
        </p>
      </section>

      {/* 5. Reklamacje i zwroty */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Reklamacje i zwroty</h2>
        <p>
          Klient ma prawo do reklamacji i zwrotu zgodnie z obowiązującymi
          przepisami prawa. Produkty rękodzielnicze mogą podlegać indywidualnym
          ustaleniom w zakresie zwrotu – szczegóły dostępne na życzenie klienta.
        </p>
      </section>

      {/* 6. Ochrona danych osobowych */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Ochrona danych osobowych (RODO)
        </h2>
        <p>
          Dane osobowe klientów przetwarzane są zgodnie z przepisami RODO w
          celu:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>realizacji zamówień i kontaktu z klientem,</li>
          <li>przesyłania informacji o zamówieniach,</li>
          <li>obsługi reklamacji i zwrotów.</li>
        </ul>
        <p>
          Administratorem danych jest Azzurro Atelier. Dane nie są udostępniane
          osobom trzecim poza przewoźnikiem (InPost) i podmiotem obsługującym
          płatności. Klient ma prawo dostępu do swoich danych, ich poprawiania
          oraz usunięcia.
        </p>
      </section>

      {/* 7. Pliki cookie */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Pliki cookies</h2>
        <p>
          Sklep używa plików cookies w celu poprawy funkcjonalności strony i
          wygody użytkowania. Cookies nie zbierają danych umożliwiających
          identyfikację osoby fizycznej. Korzystanie ze strony oznacza zgodę na
          używanie plików cookies. Możesz zmienić ustawienia przeglądarki, aby
          blokować pliki cookies.
        </p>
      </section>

      {/* 8. Postanowienia końcowe */}
      <section>
        <h2 className="text-xl font-semibold mb-2">8. Postanowienia końcowe</h2>
        <p>
          Azzurro Atelier zastrzega sobie prawo do zmian regulaminu. Aktualna
          wersja regulaminu jest zawsze dostępna na stronie sklepu.
        </p>
      </section>
    </div>
  );
}
