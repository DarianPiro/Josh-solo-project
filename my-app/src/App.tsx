import React from 'react';
import './App.css';


import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { useAuth0 } from '@auth0/auth0-react';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';



export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#efede6',
      dark: '#ffffff',
      light: '#101637',
      contrastText: '#035e7b',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#035e7b',
      paper: '#EFEDE6',
    },
    text: {
      primary: '#035e7b',
      secondary: '#072f2b',
      disabled: '#002E2C',
    },
    divider: 'rgba(255,255,255,0.12)',
    info: {
      main: '#ffffff',
    },
  },
};

function App() {
  const { isAuthenticated } = useAuth0();
  const theme = createTheme(themeOptions);
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {!isAuthenticated ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
