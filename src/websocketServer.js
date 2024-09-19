import { getWebSocketServer } from "./websocket.js";
import handlers from "./handlers/index.js";

export default function websocketServerBootstrap() {
  try {
    console.log("🚀 WebSocket Server Bootstrap");
    const websocket = getWebSocketServer();
    const { joinRoomHandler, sendDrawingHandler } = handlers(websocket);
    websocket.listen(3000);

    websocket.on("connection", (socket) => {
      socket.on("joinRoom", joinRoomHandler);

      socket.on("sendDrawing", sendDrawingHandler);
    });
  } catch (error) {
    process.exit(1);
  }
}
