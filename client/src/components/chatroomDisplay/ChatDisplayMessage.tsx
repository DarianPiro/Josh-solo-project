import MessageFrom from './MessageFrom'; // what is this error?
import MessageTo from './MessageTo';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getUserById } from '../../ApiService';

export default function ChatDisplayMessage({ chat }: { chat: string }) {
  const [userImage, setUserImage] = useState('');
  //destructure the messages
  const messages = useSelector(
    (state: RootState) => state.ChatReducer.messages
  );
  const AI_id = useSelector((state: RootState) => state.ChatReducer.AI_id);
  const AI_image = useSelector(
    (state: RootState) => state.ChatReducer.AI_image
  );
  const chatroom = useSelector((state: RootState) => state.ChatReducer);
  const currentUser = useSelector((state: RootState) => state.UserReducer);

  const otherUserId = chatroom.userIds?.filter(
    (user) => user !== currentUser._id
  )[0];

  if (chat === 'personal') {
    const getUserImage = async () => {
      const user = await getUserById(otherUserId);
      setUserImage(user.picture);
    };
    getUserImage();
  }

  // to autoscroll to the new message
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // map through the messages and check who the senderId belongs to and render accordingly
  return (
    <div className="message_wrapper" data-testid="message_wrapper">
      {messages &&
        messages.map((message: Message) => {
          return message.senderId !== currentUser._id ? (
            <MessageFrom
              key={message.messageId}
              message={message}
              image={AI_image !== '' ? AI_image : userImage}
              chat={chat}
            />
          ) : (
            <MessageTo key={message.messageId} message={message} />
          );
        })}
      <div ref={messagesEndRef} key={AI_id} />
    </div>
  );
}
