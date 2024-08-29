import { Server } from "socket.io";

const websocket = new Server({
  cors: {
    origin: "*",
  },
});

function getWebSocketServer() {
  return websocket;
}

export { getWebSocketServer };
