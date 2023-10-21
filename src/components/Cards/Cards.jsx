import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ prod }) => {
  const { _id, name, brand, type, price, rate, img } = prod;
  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p>Brand: {brand}</p>
        <p>Type: {type}</p>
        <p>Rating: {rate}</p>
        <p>Price: BDT{price}</p>

        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <div className="badge badge-outline cursor-pointer text-white">
              Details
            </div>
          </Link>
          <Link to={`/update/${_id}`}>
            <div className="badge badge-outline cursor-pointer text-white">
              Update
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  prod: PropTypes.object,
};

export default Cards;
