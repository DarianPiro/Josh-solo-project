import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography, Avatar, Menu, MenuItem } from '@mui/material';

export default function NavBar() {
  const user = useSelector((state: RootState) => state.UserReducer);
  const navigate = useNavigate();
  const handleNavigation = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/${event.currentTarget.value}`);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logout } = useAuth0();

  return (
    <div className='nav-bar'>
      <div className='logo'>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}
        >
          speechguru
        </Typography>
      </div>

      <Button
        variant='outlined'
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
        <div
          // style={{
          //   backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
          //   WebkitBackgroundClip: 'text',
          //   WebkitTextFillColor: 'transparent',
          // }}
        >
          AI Chat
        </div>
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
        variant='outlined'
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
        variant='outlined'
        value={'translation'}
        onClick={handleNavigation}
      >
        Translate Text
      </Button>

      <div>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {user.picture !== '' && (
            <Avatar sx={{ m: '1rem' }} alt='user' src={user.picture} />
          )}
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Button
              sx={{
                fontSize: '0.8rem',
                color: '#035e7b',
              }}
              value={'settings'}
              onClick={handleNavigation}
            >
              Settings
            </Button>
          </MenuItem>
          <MenuItem
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            <Button
              sx={{
                fontSize: '0.8rem',
                color: '#035e7b',
              }}
            >
              Logout
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
