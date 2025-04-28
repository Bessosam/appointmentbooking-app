import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {
        navigate('/')
      }} style={{backgroundColor: 'red'}} className='mt-6 w-full opacity-80 hover:opacity-100'>Logout</button>
    </div>
  )
}

export default LogoutButton