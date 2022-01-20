# html-mediapipe

* mediapipe with js
  * <https://google.github.io/mediapipe/solutions/pose.html#javascript-solution-api>
* js get user media
  * <https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia>
* tranfer real-time data from client to server
  * <https://blog.logrocket.com/real-time-data-transfer-with-socket-io/>
* How can I detect width and height of the webcamera?
  * <https://stackoverflow.com/questions/47593336/how-can-i-detect-width-and-height-of-the-webcamera>

  ```js
  let stream = await navigator.mediaDevices.getUserMedia({video: true});
  let {width, height} = stream.getTracks()[0].getSettings();
  console.log(`${width}x${height}`); // 640x480
  ```
