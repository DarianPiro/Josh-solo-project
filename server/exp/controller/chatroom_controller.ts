import { Request, Response } from 'express';
import chatroom from '../model/chatroom';
import User from '../model/User';

const createChatroom = async function (req: Request, res: Response) {
  console.log(req.body)
  try {
    let data = req.body;
    let result;
    if (data.AI_id === '') {
      result = await chatroom.create(data);
    } else {
      interface LanguageMap {
        [key: string]: string[];
      }
      const AI: LanguageMap = {
        English: ['William', 'Polyglot/William', `Hey`],
        French: ['Marion', 'Polyglot/Marion', 'Bonjour'],
        Spanish: ['Paula', 'Polyglot/Paula', 'Hola'],
        German: ['Karl', 'Polyglot/Karl', 'Hallo'],
        Portuguese: ['Rodrigo', 'Polyglot/Rodrigo', 'Olá'],
        Dutch: ['Kevin', 'Polyglot/Kevin', 'Halo'],
        Japanese: ['Hiro', 'Polyglot/Hiro', 'こんにちは'],
        Korean: ['Su-Ho', 'Polyglot/Su-Ho', '안녕하세요'],
        Chinese: ['Hua', 'Polyglot/Hua', '你好'],
      };
      data.AI_name = AI[data.targetLanguage][0];
      data.AI_image = AI[data.targetLanguage][1];
      data.messages[0].senderName = AI[data.targetLanguage][0];
      data.messages[0].text = AI[data.targetLanguage][2];
      result = await chatroom.create(data);
    }
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(`error while creating the chatroom:${error}`);
  }
};

const updateChatroom = async function (req: Request, res: Response) {
  try {
    let data = req.body;
    const user = await User.find({
      _id: data.userId,
    });
    console.log(user);
    const updatedChatroom = await chatroom.findOneAndUpdate(
      { chatroomId: data.chatroomId },
      {
        $push: { userIds: data.userId, users: user[0].name },
      },
      { new: true }
    );
    console.log(updatedChatroom)
    res.status(201);
    res.send(updatedChatroom);
  } catch (error) {
    res.status(500);
    console.log(`error while updating the chatroom:${error}`);
  }
};

const getChatrooms = async function (req: Request, res: Response) {
  try {
    const chatrooms = await chatroom.find({
      userIds: { $in: req.body.userId },
    });
    res.status(200);
    res.send(chatrooms);
  } catch (error) {
    res.status(500);
    console.log(`error while fetching chatroom details: ${error}`);
  }
};

const getAllChatrooms = async function (req: Request, res: Response) {
  try {
    const chatrooms = await chatroom.find();
    res.status(200);
    res.send(chatrooms);
  } catch (error) {
    res.status(500);
    console.log(`error while fetching chatroom details: ${error}`);
  }
};

module.exports = { createChatroom, getAllChatrooms, updateChatroom, getChatrooms };
