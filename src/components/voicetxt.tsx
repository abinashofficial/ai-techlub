import React, { useState } from "react";

const VoiceToText: React.FC = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    // English only
    recognition.lang = "en-US";

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Speak in English..."
        rows={5}
        cols={50}
      />

      <br />

      <button onClick={startListening}>
        {listening ? "Listening..." : "🎤 Speak"}
      </button>
    </div>
  );
};

export default VoiceToText;