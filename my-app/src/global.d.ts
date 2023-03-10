declare module 'cloudinary-react';
declare module 'mic-recorder-to-mp3';

interface RootState {
  ChatReducer: Chatroom;
  TypingReducer: boolean;
  ChatroomListReducer: ChatroomList;
}

interface Chatroom {
  chatroomId: string;
  AI_id: string;
  AI_image: string;
  AI_name: string;
  messages: Message[];
  nativeLanguage: string;
  targetLanguage: string;
  userId: string;
  user_name: string;
  __v?: number;
  _id?: string;
}

interface ChatroomList {
  chatroomList: Chatroom[];
}

interface Message {
  audio?: string;
  messageId?: string;
  senderId?: string;
  targetLanguage?: string;
  nativeLanguage?: string;
  text?: string;
  timeStamp?: number;
  translatedText?: string;
  chatroomId?: string;
  _id?: string;
}

interface Props {
  icon?: IconDefinition;
  className?: string;
}

interface Navigator extends Navigator {
  getUserMedia: any;
}
