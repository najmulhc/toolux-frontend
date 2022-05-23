import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => (
  <div>
    <div className="w-60 h-full shadow-md bg-secondary bg-opacity-20 px-1 absolute">
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
      </ul>
    </div>
    <div className="w-full h-screen "><Outlet/></div>
  </div>
);

export default Dashboard;
