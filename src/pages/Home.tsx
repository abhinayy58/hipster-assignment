import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Home = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(products);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      const products: Product[] = result;
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-16 text-gray-500">Loading products...</p>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 mt-20">Welcome to Home Page</h1>
      <p className="mb-4">
        Here are some products fetched from Fake Store API.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white flex-col justify-between rounded-xl flex shadow p-4 border border-pink-300"
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h2 className="font-bold text-lg">{product.title}</h2>
              <p className="text-pink-700">${product.price}</p>
            </div>
            <Link
              to={`/product/${product.id}`}
              className="border w-full py-2 px-4 text-center block"
            >
              More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
