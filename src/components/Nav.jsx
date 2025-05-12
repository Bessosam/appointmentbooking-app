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
    <div className="relative z-[999]" ref={menuRef}>
      {/* Mobil: Hamburgerikon */}
      <div className="md:hidden">
        {menuOpen ? (
          <X
            className="w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Menu
            className="w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Meny för mobil */}
      <nav
        className={`${
          menuOpen
            ? "absolute top-full right-0 bg-white shadow-lg rounded-md p-4 w-64 animate-slide-in"
            : "hidden"
        } md:flex gap-4 items-center`}
      >
        {isLoggedIn ? (
          <>
            <Link
              className={linkStyle}
              to="/menu"
              onClick={() => setMenuOpen(false)}
            >
              👤 {user.name}
            </Link>
            <Link
              className={linkStyle}
              to="/booking"
              onClick={() => setMenuOpen(false)}
            >
              Boka tvättstuga
            </Link>
            <Link
              className={linkStyle}
              to="/mybookings"
              onClick={() => setMenuOpen(false)}
            >
              Mina bokningar
            </Link>
            <button className={linkStyle} onClick={handleLogout}>
              Logga ut
            </button>
          </>
        ) : (
          <Link
            className={linkStyle}
            to="/register"
            onClick={() => setMenuOpen(false)}
          >
            Skapa konto
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Nav;
