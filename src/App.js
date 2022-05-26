import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin";
import ProtectedRoute from "./Components/ProtectedRoute";
import auth from "./firebase.init";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Review from "./Pages/Dashboard/Review";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchase/:productId" element={<ProtectedRoute><Purchase /></ProtectedRoute>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/profile" element={<MyProfile />} />
          <Route path="/dashboard/my-orders" element={<MyOrders />} />
          <Route path="/dashboard/add-review" element={<Review />} />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Users />
              </Admin>
            }
          />
          <Route
            path="/dashboard/manage-orders"
            element={
              <Admin>
                <ManageOrders />
              </Admin>
            }
          />
          <Route
            path="/dashboard/add-product"
            element={
              <Admin>
                {" "}
                <AddProduct />
              </Admin>
            }
          />
          <Route
            path="/dashboard/manage-products"
            element={
              <Admin>
                <ManageProducts />
              </Admin>
            }
          />
        </Route>
        <Route path="/blog" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
