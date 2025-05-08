import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex gap-4 items-center">
      {isLoggedIn ? (
        <>
          <Link to="/booking">Boka tid</Link>
          <Link to="/mybookings">Mina bokningar</Link>
          <button onClick={logout}>Logga ut</button>
          <span className="ml-2">👤 {user.userid}</span>
        </>
      ) : (
        <Link to="/register">Registrera konto</Link>
      )}
    </nav>
  );
};

export default Nav;
