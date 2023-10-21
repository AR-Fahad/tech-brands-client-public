import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rate = form.rate.value;
    const img = form.img.value;
    const newProduct = { name, brand, type, price, description, rate, img };
    console.log(newProduct);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Successfully added a product",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="p-8 md:px-40 bg-purple-200">
      <h3 className="text-black text-center text-3xl font-bold">
        Add a product
      </h3>
      <br />
      <form onSubmit={handleAdd}>
        {/* name */}
        <label>
          <span className="text-black p-2 font-semibold">Name: </span>
          <br />
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        {/* brand name */}
        <label>
          <span className="text-black p-2 font-semibold">Brand Name: </span>
          <br />
          <input
            type="text"
            placeholder="Brand name"
            name="brand"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        {/* type */}
        <label>
          <span className="text-black p-2 font-semibold">Type: </span>
          <br />
          <input
            type="text"
            placeholder="Type"
            name="type"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        {/* price */}
        <label>
          <span className="text-black p-2 font-semibold">Price: </span>
          <br />
          <input
            type="text"
            placeholder="Price"
            name="price"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        {/* description */}
        <label>
          <span className="text-black p-2 font-semibold">Description: </span>
          <br />
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        {/* rating */}
        <label>
          <span className="text-black p-2 font-semibold">Rating: </span>
          <br />
          <input
            type="text"
            placeholder="Rating"
            name="rate"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        {/* img */}
        <label>
          <span className="text-black p-2 font-semibold">Image: </span>
          <br />
          <input
            type="text"
            placeholder="Image URL"
            name="img"
            className="input input-bordered w-full bg-white text-black mb-5"
            required
          />
        </label>
        <br />
        <input
          className="btn btn-md bg-gradient-to-r from-purple-500 to-pink-500 w-full border-none text-white"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
