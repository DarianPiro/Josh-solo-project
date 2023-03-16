import { io } from 'socket.io-client';
const URL: string = process.env.REACT_APP_SERVER_URL as string;
const socket = io(URL);
export default socket;
