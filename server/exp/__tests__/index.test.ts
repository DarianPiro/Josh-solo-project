import request from 'supertest';
import app from '../app'

describe('Chatroom controller', () => {
  let chatroomId;
  it('should create a new chatroom', async () => {
    
    const chatroomData = {
      targetLanguage: 'French',
      messages: [{
        senderId: '123',
        senderName: 'Marian',
        text: 'Bonjour'
      }]
    };
    const response = await request(app)
      .post('/createnewchat')
      .send(chatroomData)
      .expect(201);
    chatroomId = response.body._id;
    expect(response.body.targetLanguage).toEqual('French');
    expect(response.body.messages[0].senderName).toEqual('Marion');
    expect(response.body.messages[0].text).toEqual('Bonjour');
  })

  it('should get all chatrooms', async () => {
    const response = await request(app)
      .get('/chatrooms')
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('_id');
    expect(response.body[0]).toHaveProperty('targetLanguage');
    expect(response.body[0]).toHaveProperty('messages');
  });

})
