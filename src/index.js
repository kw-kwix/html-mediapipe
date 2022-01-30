import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { mediapipe } from "./mediapipe.js";
import { socket } from "./ws.js";
import "./components/header";

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

socket.on("connect", () => {
  if (socket.connected) console.log(`id(${socket.id}) success to connect`);
});

socket.on("disconnect", () => {
  if (socket.disconnected) console.log("socket server disconnected");
});

socket.on("error", (error) => {
  console.error(error);
});

let action = "?";

socket.on("result", (arg) => {
  if (action !== arg.action) {
    action = arg.action;
    if (action !== "?") console.log(action);
    let pose = document.querySelector("div#pose_name");
    pose.textContent = action;
  }
});

mediapipe();
