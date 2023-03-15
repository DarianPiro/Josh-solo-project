import { Request, Response } from "express";
const textToSpeech = require("@google-cloud/text-to-speech");
import fetch from "cross-fetch";
import database from "../model/chatroom";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
const path = require("path");
const util = require("util");

const { v4: uuidv4 } = require("uuid");
// cloudinary connection
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

// connection to openAI API
const { Configuration, OpenAIApi } = require("openai");
const { isAsyncFunction } = require("util/types");
const configuration = new Configuration({
  apiKey: process.env.chatGPT_key,
});
const openai = new OpenAIApi(configuration);

const decodeAudio = async function (req: Request, res: Response) {
  try {
    const audioFileLink = req.body.audio;
    // make an API call to python server with the audio to get the text extracted
    const PYTHONURL = process.env.PYTHON_URL;
    if (!PYTHONURL) {
      throw new Error("PYTHON_URL environment variable is not defined.");
    }
    const data = { body: audioFileLink };
    console.log(data);
    const whisperResponse = await fetch(PYTHONURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const whisperResult = await whisperResponse.json();
    console.log(whisperResult);
    const text = await whisperResult.data;
    res.status(200);
    res.send({ data: text });
  } catch (error) {
    console.log(error);
  }
};

const generateAudioResponse = async function (req: Request, res: Response) {
  try {
    const chatroom = req.body;
    // slice the last sent message
    const lastMessage = req.body.messages.slice(-1)[0];
    const text = lastMessage.text;

    interface voiceMap {
      [key: string]: {
        languageCode: string;
        name: string;
      };
    }
    // convert the generated response through google cloud
    const voiceData: voiceMap = {
      English: {
        languageCode: "en-US",
        name: "en-US-Wavenet-J",
      },
      French: {
        languageCode: "fr-FR",
        name: "fr-FR-Wavenet-C",
      },
      Spanish: {
        languageCode: "es-US",
        name: "es-US-Wavenet-A",
      },
      German: {
        languageCode: "de-DE",
        name: "de-DE-Wavenet-B",
      },
      Portuguese: {
        languageCode: "pt-PT",
        name: "pt-PT-Wavenet-C",
      },
      Dutch: {
        languageCode: "nl-NL",
        name: "nl-NL-Wavenet-B",
      },
      Japanese: {
        languageCode: "ja-JP",
        name: "ja-JP-Wavenet-C",
      },
      Korean: {
        languageCode: "ko-KR",
        name: "ko-KR-Wavenet-A",
      },
      Chinese: {
        languageCode: "cmn-TW",
        name: "cmn-TW-Wavenet-A",
      },
    };
    const languageCode = voiceData[chatroom.targetLanguage].languageCode;
    const name = voiceData[chatroom.targetLanguage].name;
    const client = new textToSpeech.TextToSpeechClient();
    const request = {
      audioConfig: {
        audioEncoding: "LINEAR16",
        pitch: 0,
        speakingRate: 1,
      },
      input: {
        text: text,
      },
      voice: {
        languageCode: `${languageCode}`,
        name: `${name}`,
      },
    };
    const [response] = await client.synthesizeSpeech(request);
    // create an mp3 file from the response
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(
      path.join(__dirname, "output.mp3"),
      response.audioContent,
      "binary"
    );
    // using cloudinary sdk upload the audio and get the url
    const googleResponse = await cloudinary.uploader.unsigned_upload(
      path.join(__dirname, "/output.mp3"),
      "AIresponse",
      {
        cloud_name: "dayg41e9c",
        resource_type: "video",
      }
    );
    const audio = googleResponse.url;

    //delete the generated audio file
    fs.unlink(path.join(__dirname, "/output.mp3"), (err: any) => {
      if (err) throw err;
    });

    // update the message with audio and save to database
    // find the the chatroom to which the message belongs to
    let chats = await database.find({ chatroomId: chatroom.chatroomId });
    interface messageMap {
      messageId?: string;
      senderId?: string;
      senderName?: string;
      timeStamp?: string;
      text?: string;
      audio?: string;
      translatedText?: string;
      _id?: string;
    }
    //loop and find the chat using the message id and update the audio
    chats[0].messages.forEach((message: messageMap) => {
      console.log(message);
      if (message.messageId === lastMessage.messageId) message.audio = audio;
    });
    // save the entire chatroom to the database
    await chats[0].save();
    // send the updated chatroom back to the frontendto render
    res.status(200);
    res.send(chats[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { decodeAudio, generateAudioResponse };
