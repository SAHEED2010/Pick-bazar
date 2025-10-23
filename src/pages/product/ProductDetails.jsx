import { useParams } from "react-router-dom";
import Products from "../../mockdata/Product";
import { useEffect, useState } from "react";
import { ShoppingCart, CheckCircle } from "lucide-react";

const ProductDetails = () => {
  const [product, setProduct] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const handleFind = () => {
    setLoading(true);

    // Simulating a network request
    setTimeout(() => {
      const findItem = Products.find((item) => item.id === parseInt(id));
      setProduct(findItem || null); // Set to found item or null
      setLoading(false);
    }, 1000); // Reduced timeout for better UX
  };

  useEffect(() => {
    handleFind();
  }, [id]); // Re-run if the id changes

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {loading ? (
          <p className="p-12 text-center text-gray-500">Loading...</p>
        ) : product ? (
          <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Image Section */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[500px] object-contain rounded-md"
                />
              </div>

              {/* Details Section */}
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {product.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-emerald-600">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Features
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {(product.material || product.dimensions) && (
                  <div className="mt-4 border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Specifications
                    </h3>
                    {product.material && (
                      <p className="text-sm text-gray-600">
                        <strong>Material:</strong> {product.material}
                      </p>
                    )}
                    {product.dimensions && (
                      <p className="text-sm text-gray-600">
                        <strong>Dimensions:</strong> {product.dimensions}
                      </p>
                    )}
                  </div>
                )}

                {/* Add to Cart Button */}
                <button className="mt-6 w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="p-12 text-center text-red-500">Product not found.</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
