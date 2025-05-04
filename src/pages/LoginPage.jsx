import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../users.json';

import LoginTitle from '../components/LoginTitle';
import LoginFooter from '../components/LoginFooter';
import LoginForm from '../components/LoginForm';
import { Lock } from 'lucide-react';

const LoginPage = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const findUser = users.find(user => user.userid === userid && user.password === password);

      if (findUser) {
        navigate('/home');
      } else {
        alert('Wrong ID or Password');
        setPassword('');
      }
      setLoading(false);
    }, 3000);
  };

  return (
    <div className='flex min-h-full justify-center'>
      {loading && (
        <>
          <div className='absolute top-0 left-0 w-full h-full backdrop-blur bg-white/50 z-10' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20'>
            <span className='loader absolute'></span>
            <Lock className='w-12 h-12 z-10' />
          </div>
        </>
      )}

      <div className='w-full flex justify-center items-center h-full bg-gray-100 rounded-md p-4 bg-gradient-to-br from-[#0e4b5c] via-[#0f7c8d] to-[#ffecd2] shadow-md' style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className='w-full max-w-sm px-8'>
          <LoginTitle mode={mode} />

          <LoginForm
            userid={userid}
            setUserid={setUserid}
            password={password}
            setPassword={setPassword}
            mode={mode}
            loading={loading}
            handleSubmit={handleSubmit}
          />

          <LoginFooter mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
