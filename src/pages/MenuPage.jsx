import React, { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus, FaClipboard, FaClipboardList } from "react-icons/fa";
import PageDecoration from "../components/PageDecoration";
import { House, WashingMachine, Calendar } from "lucide-react";

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
      <div className="w-full h-screen grid-colums flex justify-center items-center rounded-md p-4 bg-white shadow-md flex-col bg-1">
        <div className="flex justify-center items-center gap-4 mb-8">
          <House className="size-14 text-stone mb-8 opacity-70" />
          <h2 className="text-3xl font-bold mb-8 text-stone-900">Välkommen till mina sidor</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 image-effect">
          <div className="flex flex-col items-center justify-center gap-4 bg-[#0053FF]/20 font-semibold p-3 sm:p-6 rounded-xl shadow-lg">
            <Calendar size={30} className="text-[#0053FF]" />
            <h2 className="font-bold text-xl text-center">Boka tvättstuga</h2>
            <button
              onClick={() => {
                navigate("/booking");
              }}
              className="flex flex-col items-center justify-center rounded-lg p-4 w-full text-white bg-[#2958A9] hover:bg-[#0053FF]/60 transition text-lg"
            >
              {" "}
              Boka nu
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-[#0053FF]/20 font-semibold p-3 sm:p-6 rounded-xl shadow-lg">
            <WashingMachine size={30} className="text-[#0053FF]" />
            <h2 className="font-bold text-xl text-center">Mina bokningar</h2>
            <button
              onClick={() => {
                navigate("/mybookings");
              }}
              className="flex flex-col items-center justify-center rounded-lg p-4 w-full text-white bg-[#2958A9] hover:bg-[#0053FF]/60 transition text-lg"
            >
              {" "}
              Se här
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-90px] right-0 z-0 size-60">
      </div>
    </div>
  );
};

export default HomePage;
