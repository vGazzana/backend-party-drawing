import roomsManeger from "./rooms";

export default async function createRoom(roomName, password = "") {
  const socket = this;
  if (roomsManeger.roomExistis(roomName)) {
    return;
  }

  const roomConfig = {
    havePassword: !!password,
    password,
    createdAt: new Date(),
  };

  await redis.hSet(`chatroom:${roomName}`, roomConfig);

  socket.join(roomName);

  return roomConfig;
}
