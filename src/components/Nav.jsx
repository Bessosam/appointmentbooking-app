import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const linkStyle = "text-[#2952a9] font-semibold hover:underline";

  const handleLogout = () => {
    logout();
    navigate("/"); // 👈 skickar tillbaka till landningssidan
  };

  return (
    <nav className="flex gap-4 items-center">
      {isLoggedIn ? (
        <>
          <Link className={linkStyle} to="/booking">
            Boka tvättstuga
          </Link>
          <Link className={linkStyle} to="/mybookings">
            Mina bokningar
          </Link>
          <button className={linkStyle} onClick={handleLogout}>
            Logga ut
          </button>
          <span className="ml-2 text-black">👤 {user.name}</span>
        </>
      ) : (
        <Link className={linkStyle} to="/register">
          Skapa konto
        </Link>
      )}
    </nav>
  );
};

export default Nav;
