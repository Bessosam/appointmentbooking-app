import React from 'react'
import LogoutButton from '../components/LogoutButton'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
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