import { ShoppingBag, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-4 bg-white shadow-sm">
      <nav className="container flex flex-row justify-between mx-auto">
        <ShoppingBag />
        <ShoppingCart />
      </nav>
    </header>
  );
}

export default Header;
