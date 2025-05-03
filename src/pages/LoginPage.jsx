import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import users from '../users.json'

const LoginPage = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();

  //Changing mode when registering or forgot password

  //userid: user password: password
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  setTimeout(() => {
    const findUser = users.find(user => user.userid === userid && user.password === password)

    if (findUser) {
      navigate('/home');
    } else {
      alert('Wrong ID or Password')
      setPassword('')
    }
    setLoading(false);
  }, 3000);
  }

  return (
    <div className='flex min-h-screen justify-center'>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>

      {loading && (
        <div className='absolute top-0 left-0 w-full h-full backdrop-blur bg-white/50 z-10'/>
      )}

      {loading && (
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20'>
              <span className='loader absolute'></span>
              <Lock className='w-8 h-8 z-10'/>
              </div>
      )}

    <div className='w-full md:w-1/3 flex justify-center items-center h-screen bg-gray-100 rounded-md shadow-md p-4' style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className='w-full max-w-sm px-8'>
        <div className='flex items-center justify-center mb-6 space-x-2'>
        <span className='text-cyan-700'>
          <Lock className='w-10 h-10'/>
          </span>
      <h2 className='text-2xl font-semibold text-gray-500'>
        {mode === 'login' && 'Login'}
        {mode === 'register' && 'Create Account'}
        {mode === 'reset' && 'Reset Password'}
      </h2>
        </div>
      <form onSubmit={handleSubmit} className='space-y-6'>
            <label htmlFor='userid' className='mb-4 block text-sm font-medium text-gray-700'>Apartment Number or Email</label>
      <div className='flex items-center border rounded-md bg-gray-200 shadow-md'>
        <span className='px-3 text-gray-500'>
          <User className='w-5 h-5'/>
        </span>
      <input
      id='userid'
      value={userid}
      onChange={(e) => setUserid(e.target.value)}
      required
      autoComplete='off'
      className='p-4 bg-gray-100 rounded w-full outline-none focus:ring-2 focus:ring-cyan-700/50 text-xl font-semibold text-gray-800' type="text"
      placeholder='Apartment number/email..'
      />
      </div>
      {mode !== 'reset' && (
        <>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-4'>Password</label>
            <div className='flex items-center border rounded-md bg-gray-200 shadow-md'>
        <span className='px-3 text-gray-500'>
          <Lock className='w-5 h-5'/>
        </span>
      <input
      id='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      autoComplete='off'
      className='p-4 bg-gray-100 rounded w-full outline-none focus:ring-2 focus:ring-cyan-700/50 text-xl font-semibold text-gray-800' type="password"
      placeholder={mode === 'register' ? 'Choose a secure password' : 'Enter your password'}
      />
      </div>
      </>
    )}
      <button type='submit' className='w-full rounded-md font-semibold text-xl py-2 transition-all duration-300 ease-in-out shadow-md cursor-pointer loginBtn' disabled={loading}>
        {loading
         ? 'Logging In...' 
         : mode === 'login'
         ? 'Login' 
         : mode === 'register'
         ? 'Register' 
         : 'Send Reset Link'}
         </button>
      </form>

      <div className='text-center mt-4 space-y-2'>
        {mode === 'login' && (
          <>
        <p className='text-sm text-gray-600'>
          Har du inget konto?{" "}
          <span onClick={() => setMode('register')} className='text-cyan-700 cursor-pointer hover:underline'>
            Create account
          </span>
        </p>
        <p className='text-sm'>
          <span onClick={() => setMode('reset')} className='text-cyan-700 cursor-pointer hover:underline'>
            Forgot password?
          </span>
        </p>
        </>
      )}

      {(mode === 'register' || mode === 'reset') && (
        <p className='text-sm'>
          <span onClick={() => setMode('login')} className='text-cyan-700 cursor-pointer hover:underline'>
            Tillbaka till login
          </span>
        </p>
      )}
      </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage