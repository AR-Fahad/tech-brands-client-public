import PropTypes from "prop-types";
import Swal from "sweetalert2";
const CartProduct = ({ cartP, setP, loadedP }) => {
  const { _id, name, brand, type, price } = cartP;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tech-brands-server.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newCartProducts = loadedP.filter((p) => p._id !== _id);
              setP(newCartProducts);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <th>
          <li className="list-disc"></li>
        </th>
        <td>{name}</td>
        <td>{brand}</td>
        <td>{type}</td>
        <td>BDT{price}</td>
        <td>
          <button
            onClick={handleDelete}
            className="btn btn-sm bg-red-500 border-none text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

CartProduct.propTypes = {
  cartP: PropTypes.object,
  setP: PropTypes.func,
  loadedP: PropTypes.array,
};

export default CartProduct;
