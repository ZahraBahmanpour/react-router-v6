import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Products, { productsLoader } from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct, { productLoader } from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";
// import About from "./pages/About";
const About = React.lazy(() => import("./pages/About"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route
        path="about"
        element={
          <React.Suspense fallback={<div>...</div>}>
            <About />
          </React.Suspense>
        }
      />

      <Route path="products" element={<SharedProductLayout />}>
        <Route index element={<Products />} loader={productsLoader} />
        <Route
          path=":productId"
          element={<SingleProduct />}
          loader={productLoader}
        />
      </Route>

      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
