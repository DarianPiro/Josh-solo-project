import React from 'react';
import ChatDisplayContainer from '../components/chatroomDisplay/ChatDisplayContainer';
import ChatroomsDashboard from '../components/chatroomDashboard/ChatroomsDashboard';

const AIChat = () => {
  return (
    <div className='chat_wrapper'>
      <ChatroomsDashboard />
      <ChatDisplayContainer />
    </div>
  );
};

export default AIChat;
