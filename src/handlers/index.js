import joinRoom from "./joinRoom.js";

export default function handlers(io) {
  const socket = this;

  const joinRoomHandler = joinRoom;

  return {
    joinRoomHandler,
  };
}
