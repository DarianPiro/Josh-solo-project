import React from 'react';
import LoginButton from '../components/LoginButton';
import './CreateChat.css'
import { Box } from '@mui/material';

const Login = () => {
  return (
    <Box className="login-page " style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <div className="logo_wrapper ">
        <img alt="logo" className="Logo" src={require('./logo.png')} />
      </div>
      <div>
        <LoginButton />
      </div>
    </Box>
  );
};

export default Login;
