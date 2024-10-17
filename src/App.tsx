import Header from "./components/header";
import Products from "./components/products";

const App = () => {
  return (
    <div className="flex flex-col space-y-16">
      <Header />
      <Products />
    </div>
  );
};

export default App;
