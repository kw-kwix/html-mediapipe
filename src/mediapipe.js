import { Pose, VERSION } from "@mediapipe/pose";
import { Camera } from "@mediapipe/camera_utils";
import { socket } from "./ws.js";
import { canvas } from "./canvas";

export const mediapipe = async () => {
  const videoElement = document.getElementsByClassName("input_video")[0];

  const updateSize = () => {
    let { innerHeight, innerWidth } = window;
    canvas.element.height = innerHeight;
    canvas.element.width = innerWidth;
  };

  // 모바일 디바이스 방향 전환시 적용
  window.onresize = updateSize;

  function onResults(results) {
    if (!results.poseLandmarks) {
      return;
    }

    canvas.draw(results);

    if (socket.connected) socket.emit("data", results);
  }

  const pose = new Pose({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${VERSION}/${file}`;
    },
  });
  pose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: true,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });
  pose.onResults(onResults);

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await pose.send({ image: videoElement });
    },
  });

  await pose.initialize();
  console.log("succes to load pose model");
  await camera.start();
  updateSize();
  console.log("success to load camera module");
};
