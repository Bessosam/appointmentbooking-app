import React from 'react';

const LoginFooter = ({ mode, setMode }) => (
  <div className='text-center mt-4 space-y-2'>
    {mode === 'login' && (
      <>
        <p className='text-sm text-gray'>
          Don't have an account?{' '}
          <span onClick={() => setMode('register')} className='text-cyan-200 cursor-pointer hover:underline'>
            Create account
          </span>
        </p>
        <p className='text-sm'>
          <span onClick={() => setMode('reset')} className='text-cyan-200 cursor-pointer hover:underline'>
            Forgot password?
          </span>
        </p>
      </>
    )}
    {(mode === 'register' || mode === 'reset') && (
      <p className='text-sm'>
        <span onClick={() => setMode('login')} className='text-cyan-200 cursor-pointer hover:underline'>
          Tillbaka till login
        </span>
      </p>
    )}
  </div>
);

export default LoginFooter;
