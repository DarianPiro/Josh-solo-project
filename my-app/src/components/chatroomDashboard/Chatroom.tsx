import { useState, useEffect } from 'react';
import { getChatroomMessages } from '../../ApiService';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Image } from 'cloudinary-react';
import socket from '../../Socket';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { getUserById } from '../../ApiService';

export default function Chatroom({ chatroom }: { chatroom: Chatroom }) {
  const [userImage, setUserImage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.UserReducer);
  const [newMessage, setNewMessage] = useState<number>(0);
  const AI_image = chatroom.AI_image;
  const chatroomId = chatroom.chatroomId;
  const currentUser = useSelector((state: RootState) => state.UserReducer);

  const otherUserId = chatroom.userIds?.filter(
    (user) => user !== currentUser._id
  )[0];

  const otherUserName = chatroom.users?.filter(
    (user) => user !== currentUser.name
  )[0];

  const lastReceivedMessage =
    chatroom.messages.slice(-1)[0]?.text?.slice(0, 18) + '...';
  const lastReceivedMessageTimeStamp =
    chatroom.messages.slice(-1)[0]?.timeStamp;

  const prettyTimestamp = moment(
    new Date(Number(lastReceivedMessageTimeStamp))
  ).format('LT');
  const retrieveChatMessages = async function () {
    // get the whole chatroom messages
    const chatroom = await getChatroomMessages(chatroomId);

    // update the global state with the selected chatroom details
    dispatch({ type: 'getChatRoomMessages', payload: chatroom[0] });
  };

  socket.on('message', (data) => {
    if (data.to === user._id) {
      retrieveChatMessages();
    }
  });

  if (chatroom.AI_id === '') {
    const getUserImage = async () => {
      const user = await getUserById(otherUserId);
      setUserImage(user.picture);
    };
    getUserImage();
  }

  return (
    <div className="chatroom_wrapper" onClick={retrieveChatMessages}>
      <div className="chatroom_details">
        <div className="chatroom_user_details">
          <div className="chatroom_user_image">
            <Image
              cloudName="dayg41e9c"
              publicId={AI_image ? AI_image : userImage}
              width="40"
              height="40"
              radius="max"
              style={{ borderRadius: '50%', p: '1rem' }}
            />
          </div>
          <div> {chatroom.AI_name ? chatroom.AI_name : otherUserName}</div>
        </div>
        <div className="chatroom_date"> {chatroom.messages.length > 0 && prettyTimestamp}</div>
      </div>
      <div>
        <div className="chatroom_lastmessage">{chatroom.messages.length > 0 && lastReceivedMessage}</div>
      </div>
    </div>
  );
}
