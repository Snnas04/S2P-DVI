const config = {
    video: { width: 640, height: 480, fps: 30 }
  }

  const landmarkColors = {
    thumb: 'red',
    index: 'blue',
    middle: 'yellow',
    ring: 'green',
    pinky: 'purple',
    wrist: 'white'
  }

  // Send gesture result to main process
  const gestureActions = {
    'one': () => {
      alert("Open audio page")
      window.appMessages.sendGestureResult("one");
    },
    'two': () => {
      alert("Change theme")
      window.appMessages.sendGestureResult("two");
    },
    'tree': () => {
      alert("Close app")
      window.appMessages.sendGestureResult("tree");
    },
    'hand': () => {
      alert("devTools")
      window.appMessages.sendGestureResult("hand");
    },
  }

  async function createDetector() {
    return window.handPoseDetection.createDetector(
      window.handPoseDetection.SupportedModels.MediaPipeHands,
      {
        runtime: "mediapipe",
        modelType: "full",
        maxHands: 2,
        solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915`,
      }
    )
  }

  async function main() {

    const video = document.querySelector("#pose-video")
    const canvas = document.querySelector("#pose-canvas")
    const ctx = canvas.getContext("2d")

    const resultLayer = {
      right: document.querySelector("#pose-result-right"),
      left: document.querySelector("#pose-result-left")
    }

    /**********************
    * define the gestures *
    **********************/
    // one
    const one = new fp.GestureDescription('one');

    for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
        one.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
        one.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
    }

    for (let finger of [fp.Finger.Index]) {
      one.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
      one.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
      one.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
      one.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
    }
    
    // two
    const two = new fp.GestureDescription('two');

    for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
        two.addCurl(finger, fp.FingerCurl.FullCurl, 0.9);
        two.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
    }

    for (let finger of [fp.Finger.Index, fp.Finger.middle]) {
        two.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
        two.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
        two.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
        two.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
    }

    // tree
    const tree = new fp.GestureDescription('tree');

    for (let finger of [fp.Finger.Thumb,fp.Finger.Pinky]) {
        tree.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
        tree.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
    }

    for (let finger of [fp.Finger.Index, fp.Finger.middle, fp.Finger.Ring]) {
        tree.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
        tree.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
        tree.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
        tree.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
    }

    // hand
    const hand = new fp.GestureDescription('hand');

    for (let finger of [fp.Finger.Thumb,fp.Finger.Ring]) {
        hand.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
        hand.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
    }

    for (let finger of [fp.Finger.index, fp.Finger.middle,fp.Finger.Pinky]) {
        hand.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
        hand.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
        hand.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
        hand.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
    }


    // configure gesture estimator
    const knownGestures = [
      one,
      two,
      tree,
      hand,
    ]

    const GE = new fp.GestureEstimator(knownGestures)
    // load handpose model
    const detector = await createDetector()
    console.log("mediaPose model loaded")

    // main estimation loop
    const estimateHands = async () => {

      // clear canvas overlay
      ctx.clearRect(0, 0, config.video.width, config.video.height)
      resultLayer.right.innerText = ''
      resultLayer.left.innerText = ''

      // get hand landmarks from video
      const hands = await detector.estimateHands(video, {
        flipHorizontal: true
      })

      for (const hand of hands) {
        for (const keypoint of hand.keypoints) {
          const name = keypoint.name.split('_')[0].toString().toLowerCase()
          const color = landmarkColors[name]
          drawPoint(ctx, keypoint.x, keypoint.y, 3, color)
        }

        const est = GE.estimate(hand.keypoints3D, 9)
        if (est.gestures.length > 0) {

          // find gesture with highest match score
          let result = est.gestures.reduce((p, c) => {
            return (p.score > c.score) ? p : c
          })
          const chosenHand = hand.handedness.toLowerCase()
          gestureActions[result.name]()
        }

      }
      // ...and so on
      setTimeout(() => { estimateHands() }, 1000 / config.video.fps)
    }

    estimateHands()
    console.log("Starting predictions")
  }

  async function initCamera(width, height, fps) {

    const constraints = {
      audio: false,
      video: {
        facingMode: "user",
        width: width,
        height: height,
        frameRate: { max: fps }
      }
    }

    const video = document.querySelector("#pose-video")
    video.width = width
    video.height = height

    // get video stream
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    video.srcObject = stream

    return new Promise(resolve => {
      video.onloadedmetadata = () => { resolve(video) }
    })
  }

  function drawPoint(ctx, x, y, r, color) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = color
    // remove fill (the dots will be invisible, but still readable for pose estimation)
    // ctx.fill()
  }

  window.addEventListener("DOMContentLoaded", () => {

    initCamera(
      config.video.width, config.video.height, config.video.fps
    ).then(video => {
      video.play()
      video.addEventListener("loadeddata", event => {
        console.log("Camera is ready")
        main()
      })
    })

    const canvas = document.querySelector("#pose-canvas")
    canvas.width = config.video.width
    canvas.height = config.video.height
    console.log("Canvas initialized")
  });