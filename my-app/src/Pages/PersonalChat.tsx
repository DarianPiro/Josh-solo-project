import React from 'react';
import ChatDisplayContainer from '../components/chatroomDisplay/ChatDisplayContainer';
import ChatroomsDashboard from '../components/chatroomDashboard/ChatroomsDashboard';
import { useSelector } from 'react-redux';

const PersonalChat = () => {
  const chatroom = useSelector((state: RootState) => state.ChatReducer);
  return (
    <div className='chat_wrapper'>
      <ChatroomsDashboard chat={'personal'} />
      {chatroom.chatroomId && <ChatDisplayContainer chat={'personal'} />}
    </div>
  );
};

export default PersonalChat;
