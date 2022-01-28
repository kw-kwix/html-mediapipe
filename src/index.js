import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mediapipe } from "./mediapipe.js"
import { socket } from './ws.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    console.log(socket.connected); // true
    console.log("success to connect");
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
    console.log(socket.connected); // false 
    console.log("socket server disconnected")
});

socket.on("error", (error) => {
    console.error(error)
});

socket.on("result", (arg) => {
    console.log(arg.action);
    let pose = document.querySelector("div#pose_name")
    pose.textContent = arg.action
});

mediapipe()
