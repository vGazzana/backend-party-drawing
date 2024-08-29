import { getWebSocketServer } from "./websocket.js";

export default function websocketServerBootstrap() {
  try {
    const websocket = getWebSocketServer();

    websocket.listen(3000, () => {
      console.log("server running at http://localhost:3000");
    });

    websocket.on("connection", (socket) => {
      console.log(socket.rooms);
    });

    console.log("🚀 Bootstrap");
  } catch (error) {
    process.exit(1);
  }
}
