import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div>
      <header>
        <LoginButton />
        <LogoutButton />
      </header>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
