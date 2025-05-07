import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {
        navigate('/')
      }} className='w-full flex items-center justify-center gap-2 font-semibold py-2 rounded-md transition text-white hover:bg-white/30 backdrop-blur logoutBtn'> <CiLogout size={20}/> Logout</button>
    </div>
  )
}

export default LogoutButton