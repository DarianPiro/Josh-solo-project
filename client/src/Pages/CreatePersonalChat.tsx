import { v4 as uuidv4 } from 'uuid';
import './CreateChat.css';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createChatRoom } from '../ApiService';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatRequests from '../components/chatroomDashboard/ChatRequests';
import { Button, Box, Typography } from '@mui/material';

export default function CreateChat() {
  const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Portuguese', label: 'Portuguese' },
    { value: 'German', label: 'German' },
    { value: 'Dutch', label: 'Dutch' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Korean', label: 'Korean' },
    { value: 'Chinese', label: 'Chinese' },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.UserReducer);
  const [targetLanguage, SetTargetLanguage] = useState<string | null>(null);
  const closeTab = function () {
    navigate('/personal-chat');
  };
  const createChat = async function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (targetLanguage) {
      const chatroomId = uuidv4();
      const data = {
        chatroomId: chatroomId,
        AI_id: '',
        AI_image: '',
        AI_name: '',
        targetLanguage: targetLanguage,
        userIds: [user._id],
        users: [user.name],
        nativeLanguage: '',
        messages: [],
      };
      let chatrooms = await createChatRoom(data);
      console.log(chatrooms);

      dispatch({ type: 'updateChatroomList', payload: chatrooms });
      navigate('/personal-chat');
    }
  };

  return (
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '1px solid #035e7b',
        height: '70%',
        width: '70%',
      }}
    >
      <ChatRequests />
      <FontAwesomeIcon className='closeTab' onClick={closeTab} icon={faXmark} />
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onSubmit={createChat}
      >
        <Typography
          variant='h6'
          className='center'
          sx={{ fontWeight: 'bold', color: 'white', m: '0.5rem' }}
        >
          Look for a new chat partner
        </Typography>
        <Select
          onChange={(event) => event?.value && SetTargetLanguage(event.value)}
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
            SetTargetLanguage((event.target as HTMLSelectElement).value);
          }}
          options={options}
          placeholder='Which language would you like to learn?'
          isSearchable
          noOptionsMessage={() =>
            'Language not supported, please chose another'
          }
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: 365,
            }),
          }}
        />

        <Button
          type='submit'
          variant='outlined'
          sx={{
            m: '1rem',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#CCD6F6',
            borderColor: '#035e7b',
          }}
        >
          Let's go!
        </Button>
      </form>
    </Box>
  );
}
