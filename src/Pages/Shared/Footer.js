import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer p-10 bg-accent text-accent-content">
    <div className="container mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        <div className="flex gap-4 flex-col items-start mt-10">
          <span className="footer-title">Products</span>
          <Link to="/" className="link link-hover">
            Bolts
          </Link>
          <Link to="/" className="link link-hover">
            Brushes
          </Link>
          <Link to="/" className="link link-hover">
            Hammers
          </Link>
          <Link to="/" className="link link-hover">
           Saws
          </Link>
        </div>
        <div className="flex gap-4 flex-col items-start mt-10">
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
         
        </div>
        <div className="flex gap-4 flex-col items-start mt-10">
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of services
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
     
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {" "}
        <h2 className="footer-title  my-4">
          © Toolux 2022. All rights reserved
        </h2>
      </div>
    </div>
  </footer>
);

export default Footer;
