import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const pic = e.target.pic.value;
    setError(null);
    if (
      password < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)
    ) {
      setError("password should be strong and more then 5 characters");
      return;
    }
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: pic,
        })
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully registered",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setError("Already have an user with this email");
        console.log(err);
      });
  };
  return (
    <>
      <div className="hero bg-white py-5 text-black">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
            <form onSubmit={handleRegister} className="card-body">
              <h3 className="text-center text-2xl font-bold">
                Create an account
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">
                    Your Name<span className="text-red-700 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-white"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered bg-white"
                  name="pic"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">
                    Your Email<span className="text-red-700 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered bg-white"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-semibold">
                    Password<span className="text-red-700 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white"
                  name="password"
                  required
                />
                {error && <p className="text-red-700">{error}</p>}
                <br />
                <p>
                  <label htmlFor="terms" className="text-black">
                    <input type="checkbox" name="" id="terms" required /> Accept
                    our terms and condition
                  </label>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-none">
                  Register
                </button>
              </div>
              <p>
                Already have an account ?{" "}
                <Link className="text-sky-500 hover:underline" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
