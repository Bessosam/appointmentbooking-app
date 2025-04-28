import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //userid: user password: password
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userid === 'user' && password === 'password') {
      navigate('/home');
    } else {
      alert('Wrong ID or Password')
    }
  }

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-gray-100 rounded-md shadow-md'>
      <div className='mb-4 w-full max-w-sm'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
            <label htmlFor='userid' className='block text-sm font-medium text-gray-700'>UserID</label>
      <input
      id='userid'
      value={userid}
      onChange={(e) => setUserid(e.target.value)}
      required
      className='p-4 bg-gray-200 rounded shadow-md w-full' type="text"/>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
      <input
      id='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className='mt-4 p-4 bg-gray-200 rounded shadow-md w-full' type="text" />
      <button type='submit' className='w-full shadow-md mt-4'>Login</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default LoginPage