import { useEffect, useState } from "react";
import Advertisement from "../Advertisement/Advertisement";
import Cards from "../Cards/Cards";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const filterProducts = data.filter(
          (product) =>
            product.brand.toLowerCase() ===
            location.pathname.split("/").join("")
        );
        setProducts(filterProducts);
        setLoading(false);
      });
  }, [location]);

  if (loading) {
    return (
      <div className="bg-white py-48">
        <h3 className="text-black text-xl font-medium text-center">
          Loading...
        </h3>
      </div>
    );
  }

  return (
    <div>
      {products.length === 0 ? (
        <>
          <div className="bg-white text-black text-center py-56">
            <h3 className="text-3xl font-bold">
              Currently there no products available
            </h3>
            <br />
            <div>
              <Link to={"/"}>
                <button className="border border-purple-700 text-purple-700 cursor-pointer p-3">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white">
          <Advertisement></Advertisement>
          <br />
          <div className="grid gap-5 p-5 lg:grid-cols-4 md:grid-cols-3">
            {products.map((product) => (
              <Cards key={product._id} prod={product}></Cards>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
