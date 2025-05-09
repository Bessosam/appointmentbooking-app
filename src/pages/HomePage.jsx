import React from "react";
import { useNavigate } from 'react-router-dom';
import laundry from "../assets/laundry.png";
import HomePageBg from "../assets/HomePageBg.png"; 

export default function Homepage () {
  const navigate = useNavigate();
  
    return(
    <div className="flex flex-col h-screen overflow-hidden">

      <div className="flex flex-1">
      
        <div className="flex flex-col justify-center px-20 w-1/2 space-y-6 -translate-y-6"> 
          <h2 className="text-4xl font-bold leading-snug text-gray-800">
            Tvätta smartare <br /> Boka din tid online
          </h2>
          <button onClick={() => navigate('/login')}
           className="self-start text-white text-xl font-bold px-8 py-2 rounded" 
           style={{ backgroundColor: "#2958A9" }}>
            Logga in
          </button>
        </div>

         <div className="w-1/2 relative flex items-end justify-end pr-12"> 
          <img
            src={laundry}
            alt="Laundry"
            className="w-[400px] object-contain absolute bottom-0 right-0 z-10"
          />
          <img
            src={HomePageBg}
            alt="background"
            className="w-[500px] object-contain relative z-0"
          />
        </div>
      </div>
    </div>
    )
}