import { Product } from "./components/Products";
import { products } from "./data/products";
function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1>Hello typescript</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
