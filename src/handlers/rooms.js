import redis from "../databases/redis.js";
const roomsManeger = {
  roomExistis: async function (roomName) {
    return await redis.exists(`chatroom:${roomName}`);
  },

  roomInformations: async function (roomName) {
    return await redis.hGetAll(`chatroom:${roomName}`);
  },

  createRoom: async function (roomName, createdBy, password = "") {
    const roomConfig = {
      havePassword: !!password,
      password,
      owner: createdBy,
      createdAt: new Date(),
    };

    await redis.hSet(`chatroom:${roomName}`, roomConfig);
  },
};

export default roomsManeger;
