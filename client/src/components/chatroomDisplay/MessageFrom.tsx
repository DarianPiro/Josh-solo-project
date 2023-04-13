import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { translateText } from '../../ApiService';
import { Image } from 'cloudinary-react';
import { Avatar } from '@mui/material';

export default function MessageFrom({
  message,
  image,
  chat,
}: {
  message: Message;
  image: string;
  chat: string;
}) {
  const prettyTimestamp = moment(new Date(Number(message.timeStamp))).format(
    'LT'
  );
  // creating states to see if translate was requested
  const [ShowTranslation, setShowTranslation] = useState(false);
  const targetLanguage = useSelector(
    (store: RootState) => store.ChatReducer.targetLanguage
  );
  const nativeLanguage = useSelector(
    (store: RootState) => store.ChatReducer.nativeLanguage
  );
  const chatroomId = useSelector(
    (store: RootState) => store.ChatReducer.chatroomId
  );
  const dispatch = useDispatch();
  const audio = message.audio;
  const translateMessage = async function () {
    // check if translation already exists
    if (message.translatedText !== '') {
      setShowTranslation(!ShowTranslation);
    } else {
      message.targetLanguage = targetLanguage;
      message.nativeLanguage = chat === 'ai' ? nativeLanguage : 'English';
      message.chatroomId = chatroomId;
      const result = await translateText(message);
      // update the state and show the translation to the user
      dispatch({ type: 'updatemessages', payload: result });
      setShowTranslation(!ShowTranslation);
    }
  };
  return (
    <>
      {message.audio === '' ? (
        <div className="message_container">
          <div className="message_from" data-testid="message_from">
            <div className="left_message_user">
            {image !== '' && image.includes('http') ? (
                <Avatar sx={{ m: '1rem', borderRadius: '50%' }} alt="user" src={image} />
              ) : (
                <Image
                  cloudName="dayg41e9c"
                  publicId={image}
                  width="40"
                  height="40"
                  radius="max"
                />
              )}
            </div>
            <div className="left_message">
              {!ShowTranslation ? (
                <div className="left_message_text message_text">
                  {message.text}
                </div>
              ) : (
                <div className="left_message_text translated_text">
                  {message.translatedText}
                </div>
              )}

              <div>
                {ShowTranslation ? (
                  <div className="message_translate" onClick={translateMessage}>
                    Show original
                  </div>
                ) : (
                  <div className="message_translate" onClick={translateMessage}>
                    Translate
                  </div>
                )}
              </div>
              <div className="message_timeStamp"> {prettyTimestamp}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="message_container">
          <div className="message_from">
            <div className="left_message_user">
              {image !== '' && image.includes('http') ? (
                <Avatar sx={{ m: '1rem', borderRadius: '50%' }} alt="user" src={image} />
              ) : (
                <Image
                  cloudName="dayg41e9c"
                  publicId={image}
                  width="40"
                  height="40"
                  radius="max"
                />
              )}
            </div>
            <div className="left_message">
              {!ShowTranslation ? (
                <div className="left_message_audio">
                  <audio
                    className="message_audio"
                    src={audio}
                    controls={true}
                  />
                </div>
              ) : (
                <div className="left_message_text translated_text">
                  {message.translatedText}
                </div>
              )}

              <div>
                {ShowTranslation ? (
                  <div className="message_translate" onClick={translateMessage}>
                    Show original
                  </div>
                ) : (
                  <div className="message_translate" onClick={translateMessage}>
                    Translate
                  </div>
                )}
              </div>
              <div className="message_timeStamp"> {prettyTimestamp}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
