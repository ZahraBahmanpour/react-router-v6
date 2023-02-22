import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import App from "./final/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./final/pages/SharedLayout";
import Home from "./final/pages/Home";
import About from "./final/pages/About";
import SharedProductLayout from "./final/pages/SharedProductLayout";
import Products, { getProducts } from "./final/pages/Products";
import SingleProduct, { getProduct } from "./final/pages/SingleProduct";
import Login from "./final/pages/Login";
import ProtectedRoute from "./final/pages/ProtectedRoute";
import Dashboard from "./final/pages/Dashboard";
import Error from "./final/pages/Error";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SharedLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "products",
//         element: <SharedProductLayout />,
//         children: [
//           {
//             index: true,
//             element: <Products />,
//             loader: getProducts,
//           },
//           {
//             path: ":productId",
//             element: <SingleProduct />,
//             loader: getProduct,
//           },
//         ],
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/dashboard",
//         element: (
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
