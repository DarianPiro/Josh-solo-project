import './App.css';
import Dashboard from './Pages/Dashboard';
import CreateChat from './Pages/CreateChat';
import TextTranslation from './Pages/TextTranslation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateChat />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/translation' element={<TextTranslation />} />
    </Routes>
  );
}

export default App;
