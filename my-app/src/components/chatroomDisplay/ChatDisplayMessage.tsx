import MessageFrom from './MessageFrom'; // what is this error?
import MessageTo from './MessageTo';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export default function ChatDisplayMessage() {
  //destructure the messages
  const messages = useSelector(
    (state: RootState) => state.ChatReducer.messages
  );
  const AI_id = useSelector((state: RootState) => state.ChatReducer.AI_id);
  const AI_image = useSelector(
    (state: RootState) => state.ChatReducer.AI_image
  );

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
    <div className="message_wrapper">
      {messages && messages.map((message: Message) => {
        return message.senderId === AI_id ? (
          <MessageFrom
            key={message.messageId}
            message={message}
            AI_image={AI_image}
          />
        ) : (
          <MessageTo key={message.messageId} message={message} />
        );
      })}
      <div ref={messagesEndRef} key={AI_id} />
    </div>
  );
}
