import "./App.css";
import Dashboard from "./Pages/Dashboard";
import CreateChat from "./Pages/CreateChat";
import TextTranslation from "./Pages/TextTranslation";
import { Route, Routes } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import './Pages/CreateChat.css';


function App() {
  const { isAuthenticated } = useAuth0();

  https: return (
    <div>
      {!isAuthenticated ? (
        <div className="login-page">
        <div className="logo_wrapper">
          <img alt='logo' className="Logo" src={require('./Pages/logo.png')} />
        </div>
          <div>
            <LoginButton />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<CreateChat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/translation" element={<TextTranslation />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
