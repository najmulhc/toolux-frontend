import React from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import navLogo from "../../Img/nav-logo.png";

const Header = () => {
  const nav = (
    <>
      <li>
        <Link className="text-neutral font-semibold text-center" to="/">
          Home
        </Link>
        <Link className="text-neutral font-semibold text-center" to="/portfolio">
          Portfolio
        </Link>
        <Link className="text-neutral font-semibold text-center" to="/dashboard">
          Dashboard
        </Link>
        <Link className="text-neutral font-semibold text-center" to="/blog">
         Blog
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="btn btn-ghost lg:hidden w-full h-full flex items-center content-center"
          >
            <span className="text-neutral text-3xl">
              <TiThMenu />
            </span>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img src={navLogo} className="w-60" alt="" />
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 hidden md:block">{nav}</ul>
        <Link to="/login" className="btn btn-primary">
          login
        </Link>
      </div>
    </div>
  );
};

export default Header;
