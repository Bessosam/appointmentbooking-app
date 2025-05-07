import React from 'react';
import { User, Lock } from 'lucide-react';

const LoginForm = ({ userid, setUserid, password, setPassword, mode, loading, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <label htmlFor='userid' className='mb-4 block text-sm font-medium text-gray-300'>Apartment Number or Email</label>
      <div className='flex items-center border rounded-md bg-gray-200 shadow-md'>
        <span className='px-2 text-gray-500'>
          <User className='w-5 h-5' />
        </span>
        <input
          id='userid'
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          required
          autoComplete='off'
          className='p-4 bg-gray-100 rounded w-full outline-none focus:ring-2 focus:ring-cyan-700/50 text-xl font-semibold text-gray-800'
          type="text"
          placeholder='Apartment number/email..'
        />
      </div>

      {mode !== 'reset' && (
        <>
          <label htmlFor='password' className='block text-sm font-medium text-gray-300'>Password</label>
          <div className='flex items-center border rounded-md bg-gray-200 shadow-md'>
            <span className='px-2 text-gray-500'>
              <Lock className='w-5 h-5' />
            </span>
            <input
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='off'
              className='p-4 bg-gray-100 rounded w-full outline-none focus:ring-2 focus:ring-cyan-700/50 text-xl font-semibold text-gray-800'
              type="password"
              placeholder={mode === 'register' ? 'Choose a secure password' : 'Enter your password'}
            />
          </div>
        </>
      )}

      <button
        type='submit'
        className='w-full rounded-md font-semibold text-xl py-2 transition-all duration-300 ease-in-out shadow-md cursor-pointer loginBtn'
        disabled={loading}
      >
        {loading
          ? 'Logging In...'
          : mode === 'login'
            ? 'Login'
            : mode === 'register'
              ? 'Register'
              : 'Send Reset Link'}
      </button>
    </form>
  );
};

export default LoginForm;
