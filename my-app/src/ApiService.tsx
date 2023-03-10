const URL = 'http://localhost:4000/';

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
