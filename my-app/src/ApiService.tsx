const URL = process.env.REACT_APP_SERVER_URL;

export const getChatroomMessages = async function (chatroomId: string) {
  const response = await fetch(`${URL}messages/${chatroomId}`);
  const chatroom = await response.json();
  return chatroom;
};

export const getChatrooms = async function () {
  const response = await fetch(`${URL}chatrooms`);
  const chatrooms = await response.json();
  return chatrooms;
};

export const createChatRoom = async function (data: Chatroom) {
  const response = await fetch(`${URL}createnewchat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const chatroom = await response.json();
  return chatroom;
};

export const saveMessage = async function (data: Message) {
  const response = await fetch(`${URL}savemessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const message = await response.json();
  return message;
};

export const AIresponse = async function (context: Chatroom) {
  const response = await fetch(`${URL}respond`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(context),
  });
  const result = await response.json();
  return result;
};

export const translateText = async function (message: Message) {
  const response = await fetch(`${URL}translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  return result;
};

export const translateGrammar = async function (message: Message) {
  const response = await fetch(`${URL}translategrammar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  const data = result.data;
  return data;
};

export const checkGrammar = async function (message: Message) {
  const response = await fetch(`${URL}grammar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  const data = await result.data;
  return data;
};

export const sendingRecord = async function (message: Message) {
  const response = await fetch(`${URL}audio`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  const data = await result.data;
  return data;
};

export const getVoiceResponse = async function (message: Message) {
  const response = await fetch(`${URL}audioresponse`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  return result;
};

export const AITranslation = async function (TextInput: TextInput) {
  const response = await fetch(`${URL}translateText`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(TextInput),
  });
  const result = await response.json();
  return result;
};

export const getUser = async function (email: string | undefined) {
  const response = await fetch(`${URL}getuser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email: email}),
  });
  const user = await response.json();
  return user[0];
};

export const updateUser = async function (data: User) {
  const response = await fetch(`${URL}updateuser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  return user;
}