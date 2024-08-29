import websocketServerBootstrap from "./src/websocketServer.js";
import bootstrapServer from "./src/server.js";

await bootstrapServer();
websocketServerBootstrap();
