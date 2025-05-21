import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-start md:pt-36 px-6 sm:px-10 md:px-20 flex-1 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-800">
          Tvätta smartare <br /> Boka din tid online
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 text-white text-lg sm:text-2xl md:text-3xl font-bold px-8 py-3 rounded loginBtn"
        >
          Logga in
        </button>
      </div>

      <div className="relative w-full h-[250px] md:h-[320px]">
        <img
          src="/DesignBG.svg"
          alt="background"
          className="absolute bottom-14 right-0 w-72 sm:w-96 md:w-[500px] object-contain z-0"
        />
        <img
          src="/landing-page-img.svg"
          alt=""
          className="absolute bottom-16 right-0 w-60 sm:w-72 md:w-[440px] object-contain z-10"
        />
      </div>
    </div>
  );
}
