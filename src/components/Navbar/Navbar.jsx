import { Link, NavLink, Outlet } from "react-router-dom";
import "../../Style/style.css";
import logo from "../../assets/logogad.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import profile from "../../assets/profile.jpg";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleLogout = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-pink-300 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-20" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL ? user.photoURL : profile} />
                </div>
              </label>
              <p>{user.displayName}</p>
              <div>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              className="btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet></Outlet>
      <footer className="footer p-10 bg-black text-base-content">
        <aside>
          <div>
            <img src={logo} alt="" />
          </div>
          <p>Providing reliable tech since 2018</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Navbar;
