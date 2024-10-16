import Navigation from "@/app/_components/layout/Navigation";
import Logo from "@/app/_components/layout/Logo";

function Header() {
  return (
    <header className="border-b border-gray-200 px-4 py-4 bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
