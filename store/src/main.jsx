import "./main.css";

import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import About from "./screens/About";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import CategoryDetails from "./screens/CategoryDetails";
import ProductDetails from "./screens/ProductDetails";

function Root() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-row justify-between bg-gray-200 p-4">
        <div className="text-2xl font-bold">Store</div>
        <div className="flex flex-row space-x-4">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <Link to="/about" className="text-xl font-bold">
            About
          </Link>
          <Link
            to="/cart"
            title="cart"
            className="text-xl font-bold
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cart (0)
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listing",
        element: <CategoryDetails />,
      },
      {
        path: "/product",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
