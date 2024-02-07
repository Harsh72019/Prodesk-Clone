import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import "./Navbar.css";
import { FaRegUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navBarHandler = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="side-nav">
      <div className="nav-logo">
        <img src={logo} alt="Prodesk IT" />
      </div>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Service</a>
        <a href="/">Service</a>
        <a href="/">Service</a>
        <a href="/">Service</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="nav-admin">
        <FaRegUser className="admin-icon" color="white" />
      </div>
      <div className="nav-dots" onClick={navBarHandler}>
        <BsThreeDotsVertical />
      </div>
      {toggleNav && (
        <div className="overlay-nav">
          <div className="overlay-nav-items">
            <div  className="off-btn" onClick={navBarHandler}>
            <IoMdClose/>
            </div>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Service</a>
            <a href="/">Service</a>
            <a href="/">Service</a>
            <a href="/">Service</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
