import { useEffect, useState } from "react";
import { Product } from "./components/Products";
import axios from "axios";
// import { products } from "./data/products";
import { IProduct } from "./models";
function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getProducts() {
    try {
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false);
      setError("Network Error");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className=" text-red-700 mb-8">All Products</h1>
      {loading && (
        <p className=" font-bold text-blue-800 text-5xl  text-center">
          Loading...
        </p>
      )}
      {error && (
        <p className=" font-bold text-red-500 text-5xl  text-center">
          {error}...
        </p>
      )}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
