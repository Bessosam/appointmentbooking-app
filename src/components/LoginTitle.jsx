import React from 'react';
import { UserLock } from 'lucide-react';

const LoginTitle = ({ mode }) => (
  <div className='flex items-center justify-center mb-6 space-x-2 flex-col'>
    <span className='text-[#2958A9]'>
      <UserLock className='w-12 h-12' />
    </span>
    <h2 className='text-2xl font-bold text-[#000000]/57 tracking-wide text-nowrap'>
      {mode === 'login' && 'Inloggning'}
      {mode === 'register' && 'Skapa konto'}
      {mode === 'reset' && 'Återställ lösenord'}
    </h2>
  </div>
);

export default LoginTitle;
