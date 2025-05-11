import React, { useEffect } from "react"; 
import { useNavigate } from 'react-router-dom';


export default function Homepage () {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

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

         <div className="w-1/2 items-end justify-end pr-12"> 
          <img
            src="/landing-page-img.svg"
            alt=""
            className="w-[410px] object-contain absolute bottom-0 right-0 z-10"
          />
          <img
            src="/DesignBG.svg"
            alt="background"
            className="w-[500px] object-contain absolute bottom-0 right-0 z-0"           
 
          />
        </div>
      </div>
    </div>

    
    )
}