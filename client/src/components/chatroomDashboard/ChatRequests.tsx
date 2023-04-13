import React, { useEffect, useState } from 'react';
import { getAllChatrooms } from '../../ApiService';
import { useSelector } from 'react-redux';
import Request from './Request';
import { Button, TextField, Box } from '@mui/material';

const ChatRequests = () => {
  const user = useSelector((state: RootState) => state.UserReducer);
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      let chatrooms = await getAllChatrooms();
      setChatrooms(chatrooms);
    })();
  }, []);

  return (
    <Box
      sx={{
        width: '20rem',
        height: '90%',
        m: '5rem',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        scrollbarWidth: 'thin',
        scrollbarColor: '#035e7b #0B132B',
      }}
    >
      <TextField
        type='text'
        variant='outlined'
        placeholder='Search language'
        size='small'
        sx={{
          borderRadius: '0.5rem',
          fieldset: { borderColor: '#035e7b' },
          color: '#CCD6F6',
          marginTop: '1rem',
        }}
        InputProps={{
          style: {
            color: '#CCD6F6',
            borderColor: '#035e7b',
          },
        }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {chatrooms.map((chatroom: Chatroom) => {
        if (
          chatroom.AI_id === '' &&
          chatroom.userIds?.length === 1 &&
          chatroom.targetLanguage.toLowerCase().includes(search.toLowerCase())
        ) {
          return <Request chatroom={chatroom} />;
        }
      })}
    </Box>
  );
};

export default ChatRequests;
