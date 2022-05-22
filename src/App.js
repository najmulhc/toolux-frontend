import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import auth from "./firebase.init";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const { data, isLoading, error } = useQuery("noting", () =>
    fetch("https://hilly-view.herokuapp.com/").then((res) => res.json())
  );
  const signIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };




  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/blog" element={<Blogs />} /> 
        <Route path="/portfolio" element={<Portfolio />} /> 
        
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
