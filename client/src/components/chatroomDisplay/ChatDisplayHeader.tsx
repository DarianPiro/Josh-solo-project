import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

export default function ChatDisplayHeader({ chat }: { chat: string }) {
  const AI_name = useSelector((state: RootState) => state.ChatReducer.AI_name);
  const isTyping = useSelector((state: RootState) => state.TypingReducer);
  const chatroom = useSelector((state: RootState) => state.ChatReducer);
  const currentUser = useSelector((state: RootState) => state.UserReducer);

  const otherUser = chatroom.users?.filter(
    (user) => user !== currentUser.name
  )[0];

  return (
    <Box
      className='chatroom_user_details'
      sx={{ marginLeft: '2rem', marginTop: '3rem' }}
    >
      <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#CCD6F6' }}>
        {' '}
        {chat === 'ai' ? AI_name : otherUser}{' '}
      </Typography>
      {isTyping ? (
        <div className='typing_wrapper'>
          <Typography variant='h6' sx={{ fontSize: '0.7rem', color: '#CCD6F6'  }}>
            typing
          </Typography>
          <div className='typing'>
            <Typography
              variant='h6'
              sx={{ fontSize: '0.7rem', color: '#CCD6F6'  }}
              className='typing__dot'
            >
              .
            </Typography>
            <Typography
              variant='h6'
              sx={{ fontSize: '0.7rem', color: '#CCD6F6'  }}
              className='typing__dot'
            >
              .
            </Typography>
            <Typography
              variant='h6'
              sx={{ fontSize: '0.7rem', color: '#CCD6F6'  }}
              className='typing__dot'
            >
              .
            </Typography>
          </div>
        </div>
      ) : null}
    </Box>
  );
}
