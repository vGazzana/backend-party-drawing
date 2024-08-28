import { Server } from "socket.io";

export default function websocketServerBootstrap() {
  try {
    const io = new Server({
      cors: {
        origin: "*",
      },
    });

    io.listen(3000, () => {
      console.log("server running at http://localhost:3000");
    });

    io.on("connection", (socket) => {
      console.log("a user connected");
    });
  } catch (error) {
    console.error(`fudeu`);
    process.exit(1);
  }
}
