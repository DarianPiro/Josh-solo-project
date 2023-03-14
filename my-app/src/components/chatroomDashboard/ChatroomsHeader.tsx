import { useNavigate } from 'react-router-dom';

export default function ChatroomsHeader() {
  const navigate = useNavigate();
  const createChat = async function () {
    navigate('/');
  };
  return (
      <div className="chatrooms_header_wrapper">
        <div className="chatrooms_header_details">
          <h2 className="polyglot_logo">Chats</h2>
          <button className="create_chat" onClick={createChat}>
            {' '}
            + Create New Chat
          </button>
        </div>
        <div className="chatroom_search_wrapper">
          <input className="chatrooms_search" placeholder="Search"></input>
        </div>
      </div>
  );
}
