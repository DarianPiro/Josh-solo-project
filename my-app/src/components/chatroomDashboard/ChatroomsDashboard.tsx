import ChatroomsHeader from './ChatroomsHeader';
import ChatroomsList from './ChatroomsList';

export default function ChatroomsDashboard() {
  
  return (
    <div className="chatrooms_display">
      <ChatroomsHeader />
      <div className="chatroom_list_background">
        <ChatroomsList />
      </div>
    </div>
  );
}
