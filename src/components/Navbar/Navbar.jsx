import { NavLink, Outlet } from "react-router-dom";
import "../../Style/style.css";
import logo from "../../assets/logogad.jpg";
const Navbar = () => {
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
          <a className="btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white">
            Login
          </a>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
