import React from 'react'
import LogoutButton from '../components/LogoutButton'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div>
      {user ? (
  <h1 className="text-2xl font-bold mt-6">Välkommen, {user.userid}!</h1>
) : (
  <h1 className="text-2xl font-bold mt-6">Välkommen!</h1>
)}

      <button onClick={() => {
        navigate('/booking')
      }} className='mt-4 w-full'>Book time</button>
      <button onClick={() => {
        navigate('/mybookings')
      }} className='w-full mt-4'>My Bookings</button>
      <LogoutButton/>
    </div>
  )
}

export default HomePage