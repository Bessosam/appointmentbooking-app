import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Nav from "./Nav";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(isLoggedIn ? "/menu" : "/");
  };

  return (
    <header
      className="flex justify-between items-center p-4 w-full text-black bg-gray-100"
    >
      <img
        src={logo}
        alt="Logo"
        className="h-10 cursor-pointer"
        onClick={handleLogoClick}
      />
      <Nav />
    </header>
  );
};

export default Header;
