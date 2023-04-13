import React from 'react';
import ChatDisplayContainer from '../components/chatroomDisplay/ChatDisplayContainer';
import ChatroomsDashboard from '../components/chatroomDashboard/ChatroomsDashboard';
import { useSelector } from 'react-redux';

const AIChat = () => {
  const chatroom = useSelector((state: RootState) => state.ChatReducer);
  return (
    <div className="chat_wrapper">
      <ChatroomsDashboard chat={'ai'} />
      {chatroom.chatroomId && <ChatDisplayContainer chat={'ai'} />}
    </div>
  );
};

export default AIChat;
