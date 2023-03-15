import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { getUser } from '../ApiService';
import TextTranslation from './TextTranslation';
import UserProfile from '../components/UserProfile';
import AIChat from './AIChat';
import CreateChat from './CreateChat';
import Settings from './Settings';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const getUserDetails = async () => {
        const userDetails = await getUser(user?.email);
        console.log(userDetails)
        dispatch({
          type: 'updateUser',
          payload: {
            name: userDetails.name ? userDetails.name : user?.name,
            email: user?.email,
            picture: userDetails.picture ? userDetails.picture : user?.picture,
          },
        });
      };
      getUserDetails();
    }
  }, [isAuthenticated]);

  return (
    <div className="app-dashboard">
      <UserProfile />
      <Routes>
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/create-ai-chat" element={<CreateChat />} />
        <Route path="/translation" element={<TextTranslation />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>Welcome</h1>} />
      </Routes>
    </div>
  );
}
