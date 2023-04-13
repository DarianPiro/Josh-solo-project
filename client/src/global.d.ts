

declare module 'cloudinary-react';
declare module 'mic-recorder-to-mp3';

interface RootState {
  ChatReducer: Chatroom;
  TypingReducer: boolean;
  ChatroomListReducer: ChatroomList;
  UserReducer: User;
}

interface Chatroom {
  chatroomId: string;
  AI_id: string;
  AI_image: string;
  AI_name: string;
  messages: Message[];
  nativeLanguage: string;
  targetLanguage: string;
  userIds?: (string | undefined)[];
  users?: (string | undefined)[];
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

interface User {
  _id: string;
  name: string | undefined;
  email: string | undefined;
  picture: string | undefined;
}

interface TextInput {
  targetLanguage: string;
  text: string;
}

interface translatedText {
  text: string;
  detectedSourceLang: string;
}

interface Props {
  icon?: IconDefinition;
}

interface Navigator {
  getUserMedia(
    options: { video?: boolean; audio?: boolean },
    success: (stream: any) => void,
    error?: (error: string) => void
  ): void;
}

interface dataMap {
  [key: string]: string;
}
