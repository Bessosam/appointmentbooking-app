import React from "react";
import logo from "../assets/logo.png";
import Nav from "./Nav";

const Header = () => (
  <header className="bg-white text-white p-4 w-full">
    <img src={logo} alt="Logo" className="h-10" />
    <Nav />
  </header>
);

export default Header;
