import React from 'react';
import { Lock } from 'lucide-react';

const LoginTitle = ({ mode }) => (
  <div className='flex items-center justify-center mb-6 space-x-2'>
    <span className='text-cyan-300'>
      <Lock className='w-8 h-8' />
    </span>
    <h2 className='text-4xl font-extrabold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-wide uppercase'>
      {mode === 'login' && 'Login'}
      {mode === 'register' && 'Create Account'}
      {mode === 'reset' && 'Reset Password'}
    </h2>
  </div>
);

export default LoginTitle;
