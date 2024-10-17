import clsx from "clsx";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import useScroll from "./useScroll";

function Header() {
  const isScrolled = useScroll(50);
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-10 p-4 bg-white/0 shadow-sm",
        { "border-b border-gray-200 bg-white/50 backdrop-blur-xl": isScrolled }
      )}
    >
      <nav className="container flex flex-row justify-between mx-auto">
        <ShoppingBag />
        <ShoppingCart />
      </nav>
    </header>
  );
}

export default Header;
