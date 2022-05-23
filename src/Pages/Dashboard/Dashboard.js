import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem("accessKey");
  const [dbData, setDbdata] = useState({});
  const { role } = dbData;
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/user/admin/${user.email}`, {
        method: "GET", 
        headers: {
          "content-type": "application/json",
          "authentication" : `bearer ${token}`
        }
      })
        .then(res => res.json())
      .then(data =>setDbdata(data))
   }
 },[user])
   

 
  return (
    <div className="flex ">
      <div className="w-60 m-0  shadow-md bg-secondary bg-opacity-20 px-1  h-screen">
        <ul className="relative">
          <li className="relative">
            <Link
              to="/dashboard/profile"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              My Profile
            </Link>
          </li>
          {role === "user" && <>
          <li className="relative">
            <Link to="/dashboard/my-orders"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              My Orders
            </Link>
          </li>
          <li className="relative">
            <Link to="/dashboard/add-review"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Add a review
            </Link>
          </li>
          </>}
          {role === "admin" && <>
          <li className="relative">
            <Link to="/dashboard/users"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
             All users
            </Link>
            </li>
            <li className="relative">
            <Link to="/dashboard/manage-orders"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
             Manage Orders
            </Link>
            </li>
            <li className="relative">
            <Link to="/dashboard/manage-products"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
             Manage Products
            </Link>
            </li>
            <li className="relative">
            <Link to="/dashboard/add-product"
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-medium text-neutral text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
             Add Product
            </Link>
          </li>
          </>}
        </ul>
      </div>
      <div className="w-full h-screen "><Outlet /></div>
    </div>
  );
}

export default Dashboard;
