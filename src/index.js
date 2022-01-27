import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mediapipe } from "./mediapipe.js"

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

mediapipe()
