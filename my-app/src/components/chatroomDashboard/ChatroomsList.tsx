import { useEffect, useState } from 'react';
import { getChatrooms } from '../../ApiService';
import Chatroom from './Chatroom';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../Socket';
import { TextField } from '@mui/material';

export default function ChatroomsList({ chat }: { chat: string }) {
  const [newMessage, setNewMessage] = useState<number>(0);
  const dispatch = useDispatch();
  const chatroomList = useSelector(
    (state: RootState) => state.ChatroomListReducer.chatroomList
  );
  const messages = useSelector(
    (state: RootState) => state.ChatReducer.messages
  );
  const user = useSelector((state: RootState) => state.UserReducer);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // get all the chatrooms on initiation
    (async () => {
      let chatrooms = await getChatrooms(user._id);
      // sort the chatrooms based on when the last message was sent
      const sortedChatrooms = chatrooms
        .filter((chatroom: Chatroom) => {
          chatroom.userIds?.includes(user._id);
        })
        .sort(function (first: Chatroom, second: Chatroom) {
          return (
            Number(second.messages.slice(-1)[0]?.timeStamp) -
            Number(first.messages.slice(-1)[0]?.timeStamp)
          );
        });
      // update the list of chatrooms
      dispatch({ type: 'displayAllChatrooms', payload: sortedChatrooms });
      // display the first chatroom messages
      dispatch({ type: 'getChatRoomMessages', payload: sortedChatrooms[0] });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let chatrooms = await getChatrooms(user._id);
      const sortedChatrooms = chatrooms.sort(function (
        first: Chatroom,
        second: Chatroom
      ) {
        return (
          Number(second.messages.slice(-1)[0]?.timeStamp) -
          Number(first.messages.slice(-1)[0]?.timeStamp)
        );
      });
      dispatch({ type: 'displayAllChatrooms', payload: sortedChatrooms });
    })();
  }, [messages, newMessage]);

  socket.on('message', (data) => {
    if (data.to === user._id) {
      setNewMessage(newMessage + 1);
    }
  });

  return (
    <div >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        sx={{m: '1rem'}}
        onChange={(e) => setSearch(e.target.value)}
      />

      {chatroomList.map((chatroom: Chatroom) => {
        if (
          chat === 'ai' &&
          chatroom.AI_name !== '' &&
          chatroom.AI_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return <Chatroom chatroom={chatroom} />;
        } else if (
          chat === 'personal' &&
          chatroom.users?.length === 2 &&
          chatroom.AI_id === '' &&
          chatroom.users
            ?.map((user?: string) =>
              user?.toLowerCase().includes(search.toLowerCase())
            )
            .includes(true)
        ) {
          return <Chatroom chatroom={chatroom} />;
        }
      })}
    </div>
  );
}
