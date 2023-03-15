import request from "supertest";
import app from "../index";
import chatroom from "../model/chatroom";

describe("Chatroom controller", () => {
  let chatroomId;
  it("should create a new chatroom", async () => {
    const chatroomData = {
      targetLanguage: "French",
      messages: [
        {
          senderId: "123",
          senderName: "Marian",
          text: "Bonjour",
        },
      ],
    };
    const response = await request(app)
      .post("/createnewchat")
      .send(chatroomData)
      .expect(201);
    chatroomId = response.body._id;
    expect(response.body.targetLanguage).toEqual("French");
    expect(response.body.messages[0].senderName).toEqual("Marion");
    expect(response.body.messages[0].text).toEqual("Bonjour");
  });

  it("should get all chatrooms", async () => {
    const response = await request(app).get("/chatrooms").expect(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("_id");
    expect(response.body[0]).toHaveProperty("targetLanguage");
    expect(response.body[0]).toHaveProperty("messages");
  });
});

describe("GET /chatroom/messages/:id", () => {
  it("should get chatroom messages", async () => {
    const newChatroom = new chatroom({
      chatroomId: "123",
      targetLanguage: "Spanish",
      messages: [
        {
          messageId: "msg001",
          text: "Test",
        },
      ],
    });
    await newChatroom.save();

    const response = await request(app).get("/messages/123");
    expect(response.body[0].chatroomId).toBe("123");
    expect(response.body[0].targetLanguage).toBe("Spanish");
  });
});

describe("saveMessage", () => {
  it("should save a message to the database", async () => {
    const message = {
      messageId: "1d612d6d-696b-4890-8eb1-768be1b0267c",
      senderId: "ChatGPTJapanese",
      senderName: "Hiro",
      timeStamp: "1678370245509",
      text: "こんにちは",
      audio: "",
      translatedText: "",
    };

    const chatroomTest = new chatroom({
      chatroomId: "12345",
      AI_id: "ChatGPTJapanese",
      targetLanguage: "Japanese",
      AI_image: "Polyglot/Hiro",
      AI_name: "Hiro",
      userId: "josh",
      user_name: "Josh",
      nativeLanguage: "English",
      messages: [],
     
    });
    await chatroomTest.save();

    const response = await request(app)
      .post("/savemessage")
      .send({
        chatroomId: "12345",
        messages: message,
      })
      .expect(201);

    const savedChatroom = await chatroom.findOne({ chatroomId: "12345" });
    if (!savedChatroom) {
      throw new Error("Chatroom not found");
    }
    expect(savedChatroom.messages).toContainEqual(
      expect.objectContaining(message)
    );
  });
});

