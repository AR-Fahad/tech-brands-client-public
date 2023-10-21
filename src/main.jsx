import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Details from "./components/Details/Details";
import MyCart from "./components/MyCart/MyCart";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/homeData.json"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://tech-brands-server.vercel.app/cart"),
      },
      {
        path: "/samsung",
        element: <Products></Products>,
      },
      {
        path: "/apple",
        element: <Products></Products>,
      },
      {
        path: "/sony",
        element: <Products></Products>,
      },
      {
        path: "/nokia",
        element: <Products></Products>,
      },
      {
        path: "/oneplus",
        element: <Products></Products>,
      },
      {
        path: "/nothing",
        element: <Products></Products>,
      },
      {
        path: "/update/:Id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-brands-server.vercel.app/products/${params.Id}`),
      },
      {
        path: "/details/:Id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-brands-server.vercel.app/products/${params.Id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
