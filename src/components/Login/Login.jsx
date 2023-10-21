import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const [msg, setMsg] = useState(null);
  const { userSignIn, xProvider } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setMsg(null);
    userSignIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        setMsg("Invalid email or password");
      });
  };
  const googleSignIn = () => {
    xProvider(googleProvider)
      .then(() => navigate(location?.state ? location.state : "/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-white text-black py-5">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100 py-8">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-center text-2xl font-bold">Account</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Email
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
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered bg-white"
                name="password"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            {msg && <p className="text-red-700">{msg}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-none">
                Sign in
              </button>
            </div>
            <p>
              Don't have an account ?{" "}
              <Link className="text-sky-500 hover:underline" to="/register">
                Register
              </Link>
            </p>
            <br />
            <p className="text-xl font-semibold text-center">Or,</p>
          </form>
          <button
            onClick={googleSignIn}
            className="btn btn-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 border-none mx-auto"
          >
            <FcGoogle></FcGoogle> google Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
