import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const host = "192.168.35.61:3000"

export const socket = io(host);

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    console.log(socket.connected); // true
    console.log("success to connect");
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
    console.log(socket.connected); // false 
});

// socket.

socket.on("hello", (arg) => {
    console.log(arg); // world
    console.log("pong");
});