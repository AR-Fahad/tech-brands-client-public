import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

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
        element: <AddProduct></AddProduct>,
      },
    ],
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
    element: <UpdateProduct></UpdateProduct>,
    loader: ({ params }) =>
      fetch(`http://localhost:3000/products/${params.Id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
