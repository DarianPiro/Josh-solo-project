import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import store from '../store';
import Reducer from '../Reducer';

// export const renderWithProviders = (
//   ui: React.ReactElement,
//   {
//     initialState,
//     store = createStore(Reducer, initialState),
//     ...renderOptions
//   } = {}
// ) => {
//   const mockedUsedNavigate = jest.fn();
//   jest.mock('react-router-dom', () => ({
//     ...(jest.requireActual('react-router-dom') as any),
//     useNavigate: () => mockedUsedNavigate,
//   }));
//   const Wrapper: React.FC = ({ children }) => {
//     return (
//       <BrowserRouter>
//         <Provider store={store}>{children}</Provider>
//       </BrowserRouter>
//     );
//   };
//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// };

export const renderWithProviders = (children: React.ReactElement) => {
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  return render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export const mockMediaDevices = {
  getUserMedia: jest.fn().mockResolvedValueOnce('fake data'),
};

Object.defineProperty(navigator, 'mediaDevices', {
  writable: true,
  value: mockMediaDevices,
});

navigator.getUserMedia = () => {
  return new Promise((resolve) => {
    resolve('response');
  });
};

export const chatroom1 = {
  chatroomId: '1',
  name: 'Chatroom 1',
  AI_id: '1',
  AI_image: '',
  AI_name: '',
  messages: [
    {
      audio: '',
      messageId: '1',
      senderId: '1',
      text: 'Hello',
      timeStamp: 123456789,
      translatedText: 'Bonjour',
    },
  ],
  nativeLanguage: 'English',
  targetLanguage: 'French',
  userId: '12',
  user_name: 'John',
  __v: 2,
  _id: '',
};

export const chatroom2 = {
  chatroomId: '2',
  name: 'Chatroom 2',
  AI_id: '2',
  AI_image: '',
  AI_name: '',
  messages: [
    {
      audio: '',
      messageId: '2',
      senderId: '2',
      text: 'Hallo',
      timeStamp: 123456789,
      translatedText: 'Bonjour',
    },
  ],
  nativeLanguage: 'German',
  targetLanguage: 'French',
  userId: '12',
  user_name: 'Franz',
  __v: 2,
  _id: '',
};
