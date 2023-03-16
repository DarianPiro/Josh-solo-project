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
        backgroundColor: 'white',
        width: '20vw',
        height: '80vh',
        m: '5rem',
        borderRadius: '2rem',
      }}
    >
      <div className="chatroom_search_wrapper">
        <input
          className="chatrooms_search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            height: '100%',
            borderRadius: '2rem',
            paddingLeft: '1.5rem',
            marginTop: '1rem',
          }}
        />
      </div>
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
