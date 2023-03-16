'use strict';
import express from 'express';
const app = express();
import cors from 'cors';
import router from './router';
import { createServer } from 'http';
import { Server } from 'socket.io';
app.use(cors());

const httpServer = createServer(app);
const options = { cors: { origin: '*' } };
const io = new Server(httpServer, options);

io.on('connection', (socket) => {
  console.log('User connected:' + socket.id);
  socket.on('userConnected', (data) => {
    console.log(data);
  });

  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
    console.log(data);
  });
  // User.watch().on("change", data => {
  //   socket.emit("updatedUser", data);}
  // );
  // socket.on("disconnect", function () {
  //   User.updateOne({ sessionId: JSON.stringify(socket.id) }, {$set: { sessionId: "" }} );
  // });
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(router);

const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});

export default httpServer;
