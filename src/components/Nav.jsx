import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const linkStyle = "text-[#2952a9] font-semibold hover:underline block py-2";

  const handleLogout = () => {
    logout();
    navigate("/"); // 👈 tillbaka till landningssidan
    setMenuOpen(false);
  };

  // 👇 Stäng meny om man klickar utanför
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 👇 Stäng meny om fönsterstorlek blir större än md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex gap-4 items-center">
      {isLoggedIn ? (
        <>
        <Link className={linkStyle} to="/menu">
        <span className="ml-2 text-black">👤  {user.name}</span>
        </Link>
          <Link className={linkStyle} to="/booking">
            Boka tvättstuga
          </Link>
          <Link className={linkStyle} to="/mybookings">
            Mina bokningar
          </Link>
          <button className={linkStyle} onClick={handleLogout}>
            Logga ut
          </button>
          
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
