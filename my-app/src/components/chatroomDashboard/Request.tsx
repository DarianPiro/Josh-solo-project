import React from 'react';
import { useSelector } from 'react-redux';
import { updateChatRoom } from '../../ApiService';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Request = ({ chatroom }: { chatroom: Chatroom }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.UserReducer);
  const [firstUser, setFirstUser] = React.useState('');

  const handleSubmit = async () => {
    const updatedChatroom = await updateChatRoom(chatroom.chatroomId, user._id);
    console.log(updatedChatroom);
    navigate('/personal-chat');
  };

  return (
    <Box sx={{ m: '2rem', marginLeft: '1rem' }}>
      <Typography
        className="center"
        variant="h6"
        sx={{ fontSize: '1rem', color: '#035e7b' }}
      >
        Name
      </Typography>
      <Typography
        className="center"
        variant="h6"
        sx={{ fontSize: '1rem', color: '#035e7b', marginBottom: '0.5rem' }}
      >
        <b> {chatroom.users![0]} </b>
      </Typography>
      <Typography
        className="center"
        variant="h6"
        sx={{ fontSize: '1rem', color: '#035e7b' }}
      >
        Language
      </Typography>
      <Typography
        className="center"
        variant="h6"
        sx={{ fontSize: '1rem', color: '#035e7b' }}
      >
        <b> {' ' + chatroom.targetLanguage}</b>{' '}
      </Typography>

      <Button
        className="center"
        variant="outlined"
        sx={{
          m: '0.5rem',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          color: '#035e7b',
          borderColor: '#035e7b',
          width: '100%',
        }}
        onClick={handleSubmit}
      >
        Join
      </Button>
    </Box>
  );
};

export default Request;
