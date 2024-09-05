import redis from "../databases/redis.js";
import { getWebSocketServer } from "../websocket.js";
import roomsManeger from "./rooms.js";

/**
 * Logic to socket join in a room
 * @param {string} roomName
 * @returns {void}
 */
export default async function joinRoom(roomName, roomPassword = "") {
  console.log(`chatroom:${roomName}`);
  const socket = this;

  if (!(await roomsManeger.roomExistis(roomName))) {
    getWebSocketServer().to(socket.id).emit("roomInexists", roomName);
    return;
  }

  const roomInfo = await roomsManeger.roomInformations(roomName);
  if (roomInfo.havePassword && roomPassword !== roomInfo.password) {
    getWebSocketServer().to(socket.id).emit("wrongPassword");
    return;
  }

  await redis.sAdd(`chatroom:${roomName}:users`, socket.id);

  socket.join(roomName);
  socket
    .to(roomName)
    .emit("usersJoined", { user: socket.id, when: new Date() });
  getWebSocketServer()
    .to(socket.id)
    .emit("joined", { room: roomName, when: new Date() });
  console.log(
    `###### joinRoom Event ###### \nUser ${socket.id} joined room ${roomName} \n##################`
  );
}
