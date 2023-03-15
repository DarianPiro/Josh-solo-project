import React from "react";
import './App.css';
import './Pages/CreateChat.css'
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <div className="login-page">
          <div className="logo_wrapper">
            <img
              alt="logo"
              className="Logo"
              src={require('./Pages/logo.png')}
            />
          </div>
          <div>
            <LoginButton />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
