import React, { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus, FaClipboard, FaClipboardList } from "react-icons/fa";
import PageDecoration from "../components/PageDecoration";

const HomePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full h-screen grid-colums flex justify-center items-center rounded-md p-4 bg-gradient-to-br from-[#0e4b5c] via-[#2958A9] to-[#ffecd2] shadow-md flex-col">
        <PageDecoration />

        {user ? (
          <h1 className="text-2xl font-bold mb-6 text-white">
            Välkommen, {user.userid}!
          </h1>
        ) : (
          <h1 className="text-2xl font-bold mt-6">Välkommen!</h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => {
              navigate("/booking");
            }}
            className="flex flex-col items-center justify-center gap-4 bg-white/20 hover:bg-white/30 transition text-white font-semibold p-8 rounded-xl shadow-lg"
          >
            <FaCalendarPlus size={40} /> Boka tvättid
          </button>
          <button
            onClick={() => {
              navigate("/mybookings");
            }}
            className="flex flex-col items-center justify-center gap-4 bg-white/20 hover:bg-white/30 transition text-white font-semibold p-8 rounded-xl shadow-lg"
          >
            <FaClipboardList size={40} /> Mina bokningar
          </button>
          <div className="col-span-1 md:col-span-2 hover: transition backdrop-blur"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
