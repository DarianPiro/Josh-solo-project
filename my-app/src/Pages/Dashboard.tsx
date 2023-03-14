import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TextTranslation from './TextTranslation';
import UserProfile from '../components/UserProfile';
import AIChat from './AIChat';
import CreateChat from './CreateChat';

export default function Dashboard() {
  return (
    <div className="app-dashboard">
      <UserProfile />
      <Routes>
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/create-ai-chat" element={<CreateChat />} />
        <Route path="/translation" element={<TextTranslation />} />
      </Routes>
    </div>
  );
}
