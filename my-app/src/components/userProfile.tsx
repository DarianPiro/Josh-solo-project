import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { useAuth0 } from '@auth0/auth0-react';

export default function UserProfile() {
  const name = useSelector(
    (state: RootState) => state.UserReducer.name
  );
  const { user } = useAuth0();
  const navigate = useNavigate();
  const handleNavigation = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/${event.currentTarget.value}`);
  };

  return (
    <div className="profile_container">
      <div className="profile_top_half">
        <div className="profile_details">
          <div>
            {user?.picture && (
              <img
                className="user_image"
                alt="user_image"
                src={user?.picture}
              />
            )}
          </div>
          <div>{user?.name}</div>
        </div>
        <div className="welcome_message center">
          {' '}
          Welcome back <br /> {user?.name}
        </div>
        <div className="menu center">
          <button
            className="menuItem"
            value={'ai-chat'}
            onClick={handleNavigation}
          >
            AI Chat
          </button>
          <button
            className="menuItem"
            value={'translation'}
            onClick={handleNavigation}
          >
            Translate Text
          </button>
          <button
            className="menuItem"
            value={'settings'}
            onClick={handleNavigation}
          >
            Settings
          </button>
        </div>
      </div>
      <div className="profile_bottom_half">
        <div className="logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      </div>
    </div>
  );
}
