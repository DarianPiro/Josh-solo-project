import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { getUser } from '../ApiService';
import TextTranslation from './TextTranslation';
import NavBar from '../components/NavBar';
import AIChat from './AIChat';
import PersonalChat from './PersonalChat';
import CreateAIChat from './CreateAIChat';
import CreatePersonalChat from './CreatePersonalChat';
import Settings from './Settings';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const getUserDetails = async () => {
        const userDetails = await getUser(user);
        dispatch({
          type: 'updateUser',
          payload: {
            _id: userDetails ? userDetails._id : user?._id,
            name: userDetails ? userDetails.name : user?.name,
            email: user?.email,
            picture: userDetails ? userDetails.picture : user?.picture,
          },
        });
      };
      getUserDetails();
    }
  }, [isAuthenticated]);
  

  return (
    <div className="app-dashboard">
      <NavBar />
      <Routes>
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/personal-chat" element={<PersonalChat />} />
        <Route path="/create-ai-chat" element={<CreateAIChat />} />
        <Route path="/create-personal-chat" element={<CreatePersonalChat />} />
        <Route path="/translation" element={<TextTranslation />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>Welcome</h1>} />
      </Routes>
    </div>
  );
}
