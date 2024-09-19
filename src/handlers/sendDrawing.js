import { getWebSocketServer } from "../websocket.js";

export default function sendDrawing(args) {
  console.log(args);
  const socket = this;
  const { image, room } = args;

  getWebSocketServer()
    .except(socket.id)
    .to(room)
    .emit("drawing", { image, by: { user: socket.user.name, id: socket.id } });
}
