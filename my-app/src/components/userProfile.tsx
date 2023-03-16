import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography, Avatar } from '@mui/material';

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.UserReducer);
  const navigate = useNavigate();
  const handleNavigation = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/${event.currentTarget.value}`);
  };

  const { logout } = useAuth0();

  return (
    <div className="profile_container">
      <div className="profile_top_half">
        <>
          {user.name !== '' && (
            <>
              {user.picture !== '' && (
                <Avatar sx={{ m: '1rem' }} alt="user" src={user.picture} />
              )}

              <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                {user.name}
              </Typography>
            </>
          )}
        </>
        <div className="menu center">
          <Button
            variant="outlined"
            sx={{
              m: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: '#035e7b',
              borderColor: '#035e7b',
              width: '80%',
            }}
            value={'ai-chat'}
            onClick={handleNavigation}
          >
            AI Chat
          </Button>
          <Button
            sx={{
              m: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: '#035e7b',
              borderColor: '#035e7b',
              width: '80%',
            }}
            variant="outlined"
            value={'personal-chat'}
            onClick={handleNavigation}
          >
            Personal Chat
          </Button>
          <Button
            sx={{
              m: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: '#035e7b',
              borderColor: '#035e7b',
              width: '80%',
            }}
            variant="outlined"
            value={'translation'}
            onClick={handleNavigation}
          >
            Translate Text
          </Button>
          <Button
            sx={{
              m: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: '#035e7b',
              borderColor: '#035e7b',
              width: '80%',
            }}
            variant="outlined"
            value={'settings'}
            onClick={handleNavigation}
          >
            Settings
          </Button>
        </div>
      </div>
      <div className="profile_bottom_half">
        <div className="logout">
          <div
            className="send"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>
        </div>
      </div>
    </div>
  );
}
