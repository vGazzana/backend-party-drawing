import createRoom from "./createRoom.js";
import joinRoom from "./joinRoom.js";

export default function handlers(io) {
  const socket = this;

  const joinRoomHandler = joinRoom;
  const createRoomHandler = createRoom;

  return {
    joinRoomHandler,
    createRoomHandler,
  };
}
