import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { name, brand, description, type, price, img, rate } = useLoaderData();

  const handleCart = () => {
    const addToCart = { name, brand, type, price, description, rate, img };
    fetch("https://tech-brands-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Added to cart",
          });
        }
      });
  };

  return (
    <div className="py-6 px-5 md:px-52 bg-white">
      <div className="card bg-slate-100 shadow-xl shadow-purple-500">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Type: {type}</p>
          <p>Brand: {brand}</p>
          <p>Rating: {rate}</p>
          <p>Price: BDT{price}</p>
          <div className="card-actions">
            <button
              onClick={handleCart}
              className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
