import express from 'express';
const router = express.Router();
import controller from './controller/message_controller'
const chatroom_controller = require('./controller/chatroom_controller.ts')
const audio_controller = require('./controller/audio_controller')
import user_controller from './controller/user_controller'

router.post('/createnewchat', chatroom_controller.createChatroom)
router.post('/updateChatroom', chatroom_controller.updateChatroom)
router.post('/chatrooms',chatroom_controller.getChatrooms)
router.get('/allChatrooms',chatroom_controller.getAllChatrooms)
router.get('/messages/:id',controller.getChatroomMessages)
router.post('/savemessage',controller.saveMessage)
router.post('/respond',controller.respond)
router.post('/translate',controller.translateMessage)
router.post('/translateText',controller.translateText)
router.post('/grammar', controller.checkGrammar)
router.post('/translategrammar', controller.translateGrammar)
router.post('/audio', audio_controller.decodeAudio)
router.post('/audioresponse',audio_controller.generateAudioResponse)
router.post('/getuser', user_controller.getUser)
router.post('/getuserbyid', user_controller.getUserById)
router.post('/updateUser', user_controller.updateUser)
export default router;