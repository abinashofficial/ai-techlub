import React, { useState, useRef } from "react";

// const SAMPLE_RATE = 16000;

const AudioChunk: React.FC = () => {
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Idle");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  // const url = "http://localhost:8000/api/transcribe"
    const url = "https://chatbot-production-5ad5.up.railway.app/api/transcribe"


  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const file = new File([blob], "audio.webm", { type: "audio/webm" });

        setStatus("Uploading...");
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(url, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        setTranscript((prev) => prev + " " + data.text);
        setStatus("Idle");
      };

      recorder.start();
      setStatus("Recording...");
    } catch (err) {
      console.error(err);
      setStatus("Microphone access denied");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Push-to-Talk Whisper Backend</h2>
      <p>Status: {status}</p>
      <button
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onTouchStart={startRecording}
        onTouchEnd={stopRecording}
        style={{ padding: "10px 20px", marginBottom: 20 }}
      >
        Hold to Talk
      </button>
      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          minHeight: 200,
          whiteSpace: "pre-wrap",
        }}
      >
        {transcript || "Speak now..."}
      </div>
    </div>
  );
};

export default AudioChunk;
