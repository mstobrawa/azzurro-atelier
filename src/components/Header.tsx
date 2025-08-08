type HeaderProps = {
  logo: string;
  title: string;
};

export default function Header({ logo, title }: HeaderProps) {
  return (
    <header className="bg-azzurro-cream">
      <img src={logo} alt="Logo Azzurre - Atelier" />
      <h1>{title}</h1>
    </header>
  );
}
