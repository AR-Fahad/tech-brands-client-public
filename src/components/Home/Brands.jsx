import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ b }) => {
  const { brand, img } = b;
  return (
    <>
      <Link to={`/${brand.toLowerCase()}`}>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="p-5 bg-gray-200 rounded-lg"
        >
          <div>
            <img className="rounded-lg" src={img} alt="" />
          </div>
          <h3 className="text-3xl font-bold text-center text-black">{brand}</h3>
        </div>
      </Link>
    </>
  );
};

Brands.propTypes = {
  b: PropTypes.object,
};

export default Brands;
