import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { mediapipe } from "./mediapipe.js";
import { socket } from "./ws.js";
import "./components/header";
import { canvas } from "./canvas.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

mediapipe();

const button = document.querySelector("button")
const play = document.getElementsByClassName("fas fa-play")[0]
const stop = document.getElementsByClassName("fas fa-stop")[0]

button.addEventListener("click", () => {
  if (socket.connected) socket.disconnect();
  else socket.connect();
});

socket.on("connect", () => {
  if (socket.connected) {
    console.log(`id(${socket.id}) success to connect`);
    stop.style.display="block"
    play.style.display="none"
  }
});

socket.on("disconnect", () => {
  if (socket.disconnected) {
    console.log("socket server disconnected");
    stop.style.display = "none";
    play.style.display = "block";
    canvas.text = "";
  }
});

socket.on("error", (error) => {
  console.error(error);
});

let action = "?";

socket.on("result", (arg) => {
  if (action !== arg.action) {
    action = arg.action;
    canvas.text = action;
  }
});
