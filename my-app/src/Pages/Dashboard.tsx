import React from 'react';
import { UserProfile } from '../components/UserProfile';
import { ChatDisplayContainer } from '../components/chatroomDisplay/ChatDisplayContainer';
import { ChatroomsDashboard } from '../components/chatroomDashboard/ChatroomsDashboard';

export function Dashboard() {
  return (
    <div className="app-dashboard">
      <UserProfile />
      <ChatroomsDashboard />
      <ChatDisplayContainer />
    </div>
  );
}
