import { combineReducers, AnyAction } from 'redux';

const initialState = {
  chatroomId: '',
  AI_id: '',
  targetLanguage: '',
  AI_image: '',
  AI_name: '',
  userId: 'josh',
  user_name: 'Josh',
  nativeLanguage: '',
  messages: [
    {
      messageId: '',
      senderId: '',
      senderName: '',
      timeStamp: '',
      text: '',
      audio: '',
      translatedText: '',
    },
  ],
};
const initalChatroomList = {
  chatroomList: [],
};
const initialUser = {
  user: {
    name: '',
    picture: '',
    email: '',
  },
};

const GETCHATROOMMESSAGES = 'getChatRoomMessages';
const UPDATEMESSAGES = 'updatemessages';
const UPDATEVOICEMESSAGE = 'updateVoiceMessage';
const UPDATECHATROOMLIST = 'updateChatroomList';
const DISPLAYALLCHATROOMS = 'displayAllChatrooms';
const ISTYPING = 'istyping';
const UPDATEUSER = 'updateUser';


function UserReducer(state = initialUser, action: AnyAction) {
  switch (action.type) {
    case UPDATEUSER: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
}

function ChatReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GETCHATROOMMESSAGES: {
      const newState = { ...action.payload };
      return newState;
    }
    case UPDATEMESSAGES: {
      const newState = { ...action.payload };
      return newState;
    }
    case UPDATEVOICEMESSAGE: {
      const messages = [...state.messages, action.payload];
      return { ...state, messages: [...messages] };
    }
    default:
      return state;
  }
}

function ChatroomListReducer(state = initalChatroomList, action: AnyAction) {
  switch (action.type) {
    case UPDATECHATROOMLIST: {
      return {
        ...state,
        chatroomList: [action.payload, ...state.chatroomList],
      };
    }
    case DISPLAYALLCHATROOMS: {
      return { ...state, chatroomList: [...action.payload] };
    }
    default:
      return state;
  }
}

function TypingReducer(state = false, action: AnyAction) {
  switch (action.type) {
    case ISTYPING: {
      return action.payload;
    }
    default:
      return state;
  }
}

const Reducer = combineReducers({
  UserReducer,
  ChatReducer,
  ChatroomListReducer,
  TypingReducer,
});

export default Reducer;