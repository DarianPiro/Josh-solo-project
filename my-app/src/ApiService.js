const URL = process.env.DB_URL;

export const getChatroomMessages = async function (chatroomId) {
  const response = await fetch(`${URL}messages/${chatroomId}`);
  const chatroom = await response.json();
  return chatroom;
};
export const getChatrooms = async function () {
  try {
    const response = await fetch(`${URL}chatrooms`);
    const chatrooms = await response.json();
    return chatrooms;
  } catch (error) {
    console.log(error);
  }

};
export const createChatRoom = async function (data) {
  try {
    const response = await fetch(`${URL}createnewchat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const chatroom = await response.json();
    return chatroom;
  } catch (error) {
    console.log(error);
  }
};
export const saveMessage = async function (data) {
  try {
    const response = await fetch(`${URL}savemessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const message = await response.json();
    return message;
  } catch (error) {
    console.log(error);
  }

};
export const AIresponse = async function (context) {
  try {
    const response = await fetch(`${URL}respond`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(context),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }

};
export const translateText = async function (message) {
  try {
    const response = await fetch(`${URL}translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
export const translateGrammar = async function (message) {
  try {
    const response = await fetch(`${URL}translategrammar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }

};
export const checkGrammar = async function (message) {
  try {
    const response = await fetch(`${URL}grammar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }

}
export const sendingRecord = async function (message) {
  try {
    const response = await fetch(`${URL}audio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    const data = await result.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const getVoiceResponse = async function (message) {
  try {
    const response = await fetch(`${URL}audioresponse`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
