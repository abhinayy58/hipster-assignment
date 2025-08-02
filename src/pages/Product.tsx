import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchProduct() {
        try {
          setLoading(true);
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          const result = await response.json();
          setProduct(result);
        } catch (err) {
          console.error("Error fetching product:", err);
        } finally {
          setLoading(false);
        }
      }

      fetchProduct();
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-16 text-gray-500">Loading product...</p>
    );
  if (!product)
    return <p className="text-center mt-16 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 border rounded-xl shadow">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        ← Go Back
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-pink-600 mb-2">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
