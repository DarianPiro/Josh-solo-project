import { v4 as uuidv4 } from 'uuid';
import './CreateChat.css';
import Select from 'react-select';
import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createChatRoom } from '../ApiService';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextField, Box } from '@mui/material';

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
  const [nativeLanguage, SetNativeLanguage] = useState<string | null>(null);
  const [targetLanguage, SetTargetLanguage] = useState<string | null>(null);
  const closeTab = function () {
    navigate('/ai-chat');
  };
  const createChat = async function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (nativeLanguage && targetLanguage) {
      console.log(`native language :${nativeLanguage}`);
      console.log(`target language :${targetLanguage}`);
      const chatroomId = uuidv4();
      const messageId = uuidv4();
      const data = {
        chatroomId: chatroomId,
        AI_id: `ChatGPT${targetLanguage}`,
        AI_image: '',
        AI_name: '',
        targetLanguage: targetLanguage,
        userIds: [user._id],
        users: [user.name],
        nativeLanguage: nativeLanguage,
        messages: [
          {
            messageId: messageId,
            senderId: `ChatGPT${targetLanguage}`,
            senderName: '',
            timeStamp: Date.now(),
            text: '',
            audio: '',
            translatedText: '',
          },
        ],
      };
      let chatrooms = await createChatRoom(data);
      console.log(chatrooms);

      dispatch({ type: 'updateChatroomList', payload: chatrooms });
      navigate('/ai-chat');
    }
  };

  return (
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #035e7b',
        borderRadius: '10px',
      }}
    >
      <form onSubmit={createChat}>
        <FontAwesomeIcon
          className='closeTab'
          onClick={closeTab}
          icon={faXmark}
        />
        <div className='create_chat_question'>
          <div className='input spacing'>
            <Select
              onChange={(event) =>
                event?.value && SetTargetLanguage(event.value)
              }
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
          </div>
        </div>
        <div className='create_chat_question'>
          <div className='input spacing'>
            <Select
              onChange={(event) =>
                event?.value && SetNativeLanguage(event.value)
              }
              onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                SetNativeLanguage((event.target as HTMLSelectElement).value);
              }}
              options={options}
              placeholder="What's your native language?"
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
          </div>
        </div>
        <div className='center'>
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
        </div>
      </form>
    </Box>
  );
}
