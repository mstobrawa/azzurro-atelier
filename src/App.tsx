import Header from "./components/Header";
import logo from "./assets/logo.webp";

function App() {
  return (
    <div className="">
      <Header
        logo={logo}
        title="Azzurro Atelier"
        links={[
          { label: "Strona główna", href: "#" },
          { label: "Produkty", href: "#products" },
          { label: "O nas", href: "#about" },
          { label: "Kontakt", href: "#contact" },
        ]}
      />
    </div>
  );
}

export default App;
