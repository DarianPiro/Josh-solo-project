import { useEffect } from 'react';
import ChatroomsHeader from './ChatroomsHeader';
import ChatroomsList from './ChatroomsList';
import { Box } from '@mui/material';

export default function ChatroomsDashboard({ chat }: { chat: string }) {
  useEffect(() => {
    console.log(chat);
  }, [chat]);
  return (
    <Box sx={{width: '20vw', m: '2rem'}}>
      <ChatroomsHeader chat={chat} />
      <Box className="chatroom_list_background"  sx={{background: 'white', borderRadius: '2rem'}}>
        <ChatroomsList chat={chat} />
      </Box>
    </Box>
  );
}
