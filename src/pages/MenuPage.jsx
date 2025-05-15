import React, { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus, FaClipboard, FaClipboardList } from "react-icons/fa";
import PageDecoration from "../components/PageDecoration";
import { House, WashingMachine, Calendar } from 'lucide-react';

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
      <div className="w-full h-screen grid-colums flex justify-center items-center rounded-md p-4 bg-white shadow-md flex-col">
        <PageDecoration />

        {user ? (
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
           <House className="size-12 text-[#2958A9]"/> Hej, {user.userid}!
          </h1>
        ) : (
          <h1 className="text-2xl font-bold mt-6">Hej USER</h1>
        )}
        <h2 className="text-2xl font-bold mb-8">Välkommen till mina sidor</h2>
        <div className="grid w-full grid-cols-2 md:grid-cols-2 gap-6 mb-10 image-effect">
          <div className="flex flex-col items-center justify-center gap-4 bg-[#0053FF]/20 font-semibold p-8 rounded-xl shadow-lg">
          <WashingMachine size={40} className="text-[#0053FF]" />
          <h2 className="font-bold text-3xl text-center">Boka tvättstuga</h2>
          <button
            onClick={() => {
              navigate("/booking");
            }}
            className="flex flex-col items-center justify-center rounded-lg p-4 w-full text-white bg-[#2958A9] hover:bg-[#0053FF]/60 transition text-xl"
          > Boka nu
          </button>
          </div>

                    <div className="flex flex-col items-center justify-center gap-4 bg-[#0053FF]/20 font-semibold p-8 rounded-xl shadow-lg">
          <WashingMachine size={40} className="text-[#0053FF]" />
          <h2 className="font-bold text-3xl text-center">Mina bokningar</h2>
          <button
            onClick={() => {
              navigate("/mybookings");
            }}
            className="flex flex-col items-center justify-center rounded-lg p-4 w-full text-white bg-[#2958A9] hover:bg-[#0053FF]/60 transition text-xl"
          > Se här
          </button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
