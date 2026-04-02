import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";

const FaceMoodDetector = () => {
  const webcamRef = useRef(null);

  const [mood, setMood] = useState("Click Start");
  const [history, setHistory] = useState([]);
  const [isCameraOn, setIsCameraOn] = useState(false);

  // 🔹 Mood Detection
  const detectMood = (landmarks) => {
    if (!landmarks) return "Detecting...";

    const leftMouth = landmarks[61];
    const rightMouth = landmarks[291];
    const topLip = landmarks[13];
    const bottomLip = landmarks[14];

    const mouthWidth = Math.abs(rightMouth.x - leftMouth.x);
    const mouthHeight = Math.abs(bottomLip.y - topLip.y);

    const eyeTop = landmarks[159];
    const eyeBottom = landmarks[145];
    const eyeOpen = Math.abs(eyeTop.y - eyeBottom.y);

    const eyebrow = landmarks[70];
    const eye = landmarks[33];
    const eyebrowHeight = Math.abs(eyebrow.y - eye.y);

    if (mouthHeight > 0.06 && eyeOpen > 0.03) return "😲 Surprised";
    if (mouthWidth > 0.25 && mouthHeight > 0.02) return "😄 Happy";
    if (eyebrowHeight < 0.015) return "😠 Angry";
    if (mouthWidth < 0.18 && mouthHeight < 0.02) return "😔 Sad";

    return "😐 Neutral";
  };

  // 🔹 Smooth Output
  const getStableMood = (newMood) => {
    const updated = [...history, newMood].slice(-5);
    setHistory(updated);

    const freq = {};
    updated.forEach((m) => {
      freq[m] = (freq[m] || 0) + 1;
    });

    return Object.keys(freq).reduce((a, b) =>
      freq[a] > freq[b] ? a : b
    );
  };

  useEffect(() => {
    if (!isCameraOn) return; // 👈 camera OFF hai to kuch nahi chalega
    if (!webcamRef.current?.video) return;

    const faceMesh = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults((results) => {
      if (!results.multiFaceLandmarks.length) return;

      const landmarks = results.multiFaceLandmarks[0];

      const detectedMood = detectMood(landmarks);
      const stableMood = getStableMood(detectedMood);

      setMood(stableMood);
    });

    const camera = new Camera(webcamRef.current.video, {
      onFrame: async () => {
        await faceMesh.send({
          image: webcamRef.current.video,
        });
      },
      width: 640,
      height: 480,
    });

    camera.start();

    // 🔹 Cleanup (important)
    return () => {
      camera.stop();
    };
  }, [isCameraOn]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Face Mood Detector</h2>

      {/* 🔘 Buttons */}
      {!isCameraOn ? (
        <button
          onClick={() => {
            setIsCameraOn(true);
            setMood("Starting...");
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ▶ Start Camera
        </button>
      ) : (
        <button
          onClick={() => {
            setIsCameraOn(false);
            setMood("Camera Off");
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ⏹ Stop Camera
        </button>
      )}

      {/* 📷 Webcam (only when ON) */}
      {isCameraOn && (
        <Webcam
          ref={webcamRef}
          mirrored
          style={{
            width: 640,
            height: 480,
            borderRadius: "10px",
          }}
        />
      )}

      {/* 😎 Mood */}
      <h1 style={{ marginTop: "20px" }}>{mood}</h1>
    </div>
  );
};

export default FaceMoodDetector;