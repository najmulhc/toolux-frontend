import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Admin = ({ children }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [dbData, setDbdata] = useState({});
  const { role } = dbData;
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/user/admin/${user.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authentication: `bearer ${localStorage.getItem("accessKey")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setDbdata(data));
    }
  }, [user]);
    if (role === "admin") {
    
    return children;
    }
    if (role === "user") {
        signOut(auth);
        navigate("/")
    }
 
};

export default Admin;
