import PropTypes from "prop-types";

const Cards = ({ prod }) => {
  const { name, brand, type, price, rate, img } = prod;
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
          <div className="badge badge-outline cursor-pointer text-white">
            Details
          </div>
          <div className="badge badge-outline cursor-pointer text-white">
            Update
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  prod: PropTypes.object,
};

export default Cards;
