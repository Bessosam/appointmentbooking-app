import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const linkStyle = "text-black tracking-wider font-semibold hover:underline block py-2";

  const registerLinkStyle = "loginBtn text-white text-lg sm:text-md md:text-sm font-bold px-8 py-3 rounded opacity-95"

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      {/* Mobile: Hamburger icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <X className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen
            ? "absolute top-full right-0 bg-white shadow-lg rounded-md p-4 w-64 animate-slide-in"
            : "hidden"
        } md:hidden`}
      >
        {isLoggedIn && (
          <>
            <Link className={linkStyle} to="/menu" onClick={() => setMenuOpen(false)}>
              👤 {user.name}
            </Link>
            <Link className={linkStyle} to="/booking" onClick={() => setMenuOpen(false)}>
              Boka tvättstuga
            </Link>
            <Link className={linkStyle} to="/mybookings" onClick={() => setMenuOpen(false)}>
              Mina bokningar
            </Link>
            <button className={linkStyle} onClick={handleLogout}>
              Logga ut
            </button>
          </>
        )}
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <Link className={linkStyle} to="/menu">
              👤 {user.name}
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
          <Link className={registerLinkStyle} to="/register">
            Skapa konto
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Nav;
