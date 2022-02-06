import { POSE_CONNECTIONS, Results } from "@mediapipe/pose";
import { drawLandmarks, drawConnectors } from "@mediapipe/drawing_utils";

class Canvas {
  constructor() {
    this.element = document.querySelector("canvas");
    this.ctx = this.element.getContext("2d");
    this.text = "";
  }

  /**
   *
   * @param {Results} results
   */
  draw(results) {
    const { width, height } = this.element;
    const { segmentationMask, poseLandmarks, image } = results;
    this.ctx.save();
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.drawImage(segmentationMask, 0, 0, width, height);
    this.ctx.drawImage(image, 0, 0, width, height);
    this.ctx.globalCompositeOperation = "source-over";
    drawConnectors(this.ctx, poseLandmarks, POSE_CONNECTIONS, {
      color: "#00FF00",
      lineWidth: 4,
    });
    drawLandmarks(this.ctx, poseLandmarks, {
      color: "#FF0000",
      lineWidth: 2,
    });
    this.ctx.restore();
    this.writeText();
  }

  writeText() {
    this.ctx.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.text, this.element.width / 2, this.element.height / 12);
  }
}

export const canvas = new Canvas()