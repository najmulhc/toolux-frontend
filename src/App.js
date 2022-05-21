import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import auth from "./firebase.init";
import Home from "./Pages/Home/Home";
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


  if (data) {
    console.log(data);
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
