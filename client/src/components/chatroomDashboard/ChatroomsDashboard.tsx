import ChatroomsHeader from './ChatroomsHeader';
import ChatroomsList from './ChatroomsList';
import { Box } from '@mui/material';

export default function ChatroomsDashboard({ chat }: { chat: string }) {
  return (
    <Box sx={{width: '18rem', m: '2rem', height: '55vh'}}>
      <ChatroomsHeader chat={chat} />
      <Box className="chatroom_list_background">
        <ChatroomsList chat={chat} />
      </Box>
    </Box>
  );
}
