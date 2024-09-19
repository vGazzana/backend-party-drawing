import joinRoom from "./joinRoom.js";
import sendDrawing from "./sendDrawing.js";

export default function handlers(io) {
  const socket = this;

  const joinRoomHandler = joinRoom;
  const sendDrawingHandler = sendDrawing;
  return {
    joinRoomHandler,
    sendDrawingHandler,
  };
}
