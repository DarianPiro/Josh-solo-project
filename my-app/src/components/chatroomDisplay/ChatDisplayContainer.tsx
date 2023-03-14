import ChatDisplayHeader from './ChatDisplayHeader';
import ChatDisplayMessage from './ChatDisplayMessage';
import ChatDisplayFooter from './ChatDisplayFooter';

export default function ChatDisplayContainer() {
  return (
    <div className="chat_display_container">
      <ChatDisplayHeader />
      <ChatDisplayMessage />
      <ChatDisplayFooter />
    </div>
  );
}
