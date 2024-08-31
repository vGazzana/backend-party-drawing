/**
 * Logic to socket join in a room
 * @param {string} roomName
 * @returns {void}
 */
export default function joinRoom(roomName, roomPassword) {
  const socket = this;

  socket.join(roomName);

  console.log(
    `###### joinRoom Event ###### \nUser ${socket.id} joined room ${roomName} \n##################`
  );
}
