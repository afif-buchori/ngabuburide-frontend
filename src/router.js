import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Product from "./Pages/Product";
import Notifications from "./Pages/Notification";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Tracking from "./Pages/OrderTracking";
import ProductDetails from "./Pages/ProductDetail";
import Faq from "./Pages/FAQ";
import PublicRoute from "./utils/wrapper/publicRoute";
import PrivateRoute from "./utils/wrapper/privateRoute";
import AboutUs from "./Pages/AboutUs";
import CommingSoon from "./components/CoomingSoon";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/forgot",
    element: (
      <PublicRoute>
        <Forgot />
      </PublicRoute>
    ),
  },
  { path: "/product", element: <Product /> },
  { path: "/notification", element: <Notifications /> },
  { path: "/chat", element: <Chat /> },
  { path: "/details", element: <ProductDetails /> },
  { path: "/FAQ", element: <Faq /> },

  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute>
        <Checkout />
      </PrivateRoute>
    ),
  },
  {
    path: "/tracking",
    element: (
      <PrivateRoute>
        <Tracking />
      </PrivateRoute>
    ),
  },
  { path: "/about", element: <AboutUs /> },
  { path: "/commingsoon", element: <CommingSoon /> },
  { path: "/notfound", element: <NotFound /> },
]);

export default router;
