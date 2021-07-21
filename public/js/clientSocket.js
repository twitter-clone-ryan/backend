let connected = false;

const socket = io("http://localhost:3001");

socket.emit("setup", userLoggedIn);

socket.on("connected", () => {
  connected = true;
});
