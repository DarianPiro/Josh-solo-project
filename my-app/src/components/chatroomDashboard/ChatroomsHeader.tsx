import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/material';

export default function ChatroomsHeader({ chat }: { chat: string }) {
  const navigate = useNavigate();
  const createChat = async function () {
    chat === 'ai'
      ? navigate('/create-ai-chat')
      : navigate('/create-personal-chat');
  };
  return (
    <Box className="center">
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          alignSelf: 'center',
          m: '0.5rem',
        }}
      >
        Chats
      </Typography>
      <Button
        sx={{
          m: '0.5rem',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          alignSelf: 'center',
          width: '50%',
        }}
        variant="outlined"
        onClick={createChat}
      >
        New Chat
      </Button>
    </Box>
  );
}
