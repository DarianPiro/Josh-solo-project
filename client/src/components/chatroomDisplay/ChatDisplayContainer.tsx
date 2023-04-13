import ChatDisplayHeader from './ChatDisplayHeader';
import ChatDisplayMessage from './ChatDisplayMessage';
import ChatDisplayFooter from './ChatDisplayFooter';
import { Box } from '@mui/material';

export default function ChatDisplayContainer({ chat }: { chat: string }) {
  return (
    <Box sx={{width:'60vw', height: '80vh'}}>
      <ChatDisplayHeader chat={chat} />
      <ChatDisplayMessage chat={chat} />
      <ChatDisplayFooter chat={chat} />
    </Box>
  );
}
