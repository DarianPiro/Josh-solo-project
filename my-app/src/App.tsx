import './App.css';
import { Dashboard } from './Pages/Dashboard';
import { CreateChat } from './Pages/create-chat';
import { Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  https: return (
    <div>
      <header>
        <LoginButton />
        <LogoutButton />
      </header>
      <Routes>
        <Route path="/" element={<CreateChat />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ div>
  );
}

export default App;
