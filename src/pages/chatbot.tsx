// import { div } from "framer-motion/client";
import React, { useState, useRef, useEffect } from "react";
// import type { KeyboardEvent } from "react";
import { VscSend } from "react-icons/vsc";
import Lottie from "lottie-react";
// import { div } from "framer-motion/client";
import { FaMicrophoneAltSlash } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";




type Role = "user" | "bot";

  interface Animations {
  [key: string]: any; // JSON object for each Lottie animation
}
  const services = 
                  [{
      title: 'Smart Booking',
    description: 'Simplify scheduling and eliminate manual coordination with an intelligent smart booking system. Our solution enables seamless appointment management, real-time availability, automated confirmations, and calendar integrations. Designed to enhance user convenience and operational efficiency, Smart Booking reduces no-shows, saves time, and ensures a smooth booking experience for both businesses and customers.',
    url:"/#about",
    jsonLink: "https://res.cloudinary.com/dababspdo/raw/upload/v1767037104/Robot-Bot_3D_bhaksb.json",
    jsonName:"booking_gif",
  },
                    {
      title: 'Live Chat',
    description: 'Simplify scheduling and eliminate manual coordination with an intelligent smart booking system. Our solution enables seamless appointment management, real-time availability, automated confirmations, and calendar integrations. Designed to enhance user convenience and operational efficiency, Smart Booking reduces no-shows, saves time, and ensures a smooth booking experience for both businesses and customers.',
    url:"/#about",
    jsonLink: "https://res.cloudinary.com/dababspdo/raw/upload/v1769988481/Chatbot_typing_florpm.json",
    jsonName:"typing_gif",
  },

]

interface Message {
  id: number;
  role: Role;
  text: string;
  time: string;
  form:any;
}

interface Response {
  message:string;
  form:any;
}

interface ChatApiResponse {
  response?: Response;
  intent?: string;
  confidence?: number;
    keyword:any;
}

export default function ChatBot() {
  const vendorId = "9940";
  // const apiUrl = "https://chatbot-production-5ad5.up.railway.app/api/chat";
  const apiUrl = "http://localhost:8000/api/chat";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
    const [prevMessage, setPrevMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [animations, setAnimations] = useState<Animations>({});

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

    const chatIconRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const movedRef = useRef(false);
  const hasFetched = useRef(false);

    // const [status, setStatus] = useState("Idle");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
      const [isRecording, setIsRecording] = useState(false);
  
    const url = "http://localhost:8000/api/transcribe"
      // const url = "https://chatbot-production-5ad5.up.railway.app/api/transcribe"

      const MIN_HEIGHT = 40;
const MAX_HEIGHT = 120;

const normalizeText = (text: string) => {
  return text.replace(/[\s.]/g, "").toLowerCase();
};

useEffect(() => {
  const el = textareaRef.current;
  if (!el) return;

  el.style.height = "0px";
  const scrollHeight = el.scrollHeight;
  const newHeight = Math.min(Math.max(scrollHeight, MIN_HEIGHT), MAX_HEIGHT);
  el.style.height = `${newHeight}px`;
  el.style.overflowY = scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
}, [input]);
  
  
const startRecording = async () => {
  try {
    setIsRecording(true);
    // setStatus("Recording...");

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    audioChunksRef.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunksRef.current.push(e.data);
    };

    recorder.onstop = async () => {
      setLoading(true)
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const file = new File([blob], "audio.webm", { type: "audio/webm" });

      // setStatus("Uploading...");

      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(url, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        const transcription = data.text?.trim() || "";

        if (transcription) {
          // Directly send the transcription instead of relying on setInput
          await sendMessageWithText(transcription);
                  setLoading(false)

        }

        // setStatus("Idle");
      } catch (err) {
        console.error("Transcription failed:", err);
        setLoading(false)
        // setStatus("Idle");
      }
    };

    recorder.start();
  } catch (err) {
    console.error(err);
    // setStatus("Microphone access denied");
    setIsRecording(false);
  }
};

const stopRecording = () => {
  setIsRecording(false);
  mediaRecorderRef.current?.stop();
};

// Separate send function that accepts a text directly
const sendMessageWithText = async (text: string) => {
    if (!text.trim() || loading) return;
let input_data = text
if (normalizeText(input_data) === "yes") {
  input_data = prevMessage;
}
  const userMessage: Message = {
    id: Date.now(),
    role: "user",
    text,
    time: new Date().toLocaleTimeString(),
    form: null,
  };
  setMessages(prev => [...prev, userMessage]);

  setLoading(true);

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input_data, vendorId }),
    });

    const data: ChatApiResponse = await res.json();

    const botText = data.response?.message || "I didn't understand that.";
    const botMessage: Message = {
      id: Date.now() + 1,
      role: "bot",
      text: botText,
      time: new Date().toLocaleTimeString(),
      form: data.response?.form,
    };
    setMessages(prev => [...prev, botMessage]);

    if (data.keyword) setPrevMessage(data.keyword);
  } catch (err) {
    const errorMsg: Message = {
      id: Date.now() + 2,
      role: "bot",
      text: "Server error — please try again.",
      time: new Date().toLocaleTimeString(),
      form: null,
    };
    setMessages(prev => [...prev, errorMsg]);
            setLoading(false)
    
  }

  setLoading(false);
};








  /* ---------------- FETCH WELCOME ---------------- */
    const fetchApi = async (msg: string) => {
          setLoading(true);

      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: msg, vendorId }),
        });

        const data: ChatApiResponse = await res.json();

            const userMessage: Message = {
            id: Date.now(),
            role: "bot",
            text: data.response?.message || "Hello 👋 How can I help you today?",
            time: new Date().toLocaleTimeString(),
            form:data.response?.form || null,
    };
            setMessages(prev => [...prev, userMessage]);

      } catch(err) {
              const errorMsg: Message = {
        id: Date.now() + 2,
        role: "bot",
        text: "Server error — please try again.",
        time: new Date().toLocaleTimeString(),
        form:null,
      };
      console.log(err)
      setMessages(prev => [...prev, errorMsg]);

      }
          setLoading(false);

    };

  useEffect(() => {
     if (hasFetched.current) return;
  hasFetched.current = true;
    fetchApi("hey");
  }, []);

  // Scroll to bottom when messages or loading changes
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading, open]);


  const sendMessage = async () => {
    if (!input.trim() || loading) return;
let input_data = input
if (input.trim().toLowerCase() === "yes"){
input_data = prevMessage;
} 

    

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
      time: new Date().toLocaleTimeString(),
      form:null,
    };
        setInput("");
          requestAnimationFrame(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${MIN_HEIGHT}px`;
      textareaRef.current.style.overflowY = "hidden";
    }
  });


    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      console.log(messages)
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input_data, vendorId }),
      });

      const data: ChatApiResponse = await res.json();

      let botText = "I didn't understand that.";
if (data.response) {
        botText = data.response.message;
              const botMessage: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: botText,
        time: new Date().toLocaleTimeString(),
        form: data.response?.form,
      };

      setMessages(prev => [...prev, botMessage]);
      }
      if (data.keyword){
        setPrevMessage(data.keyword)
      }


    } catch (err) {
      const errorMsg: Message = {
        id: Date.now() + 2,
        role: "bot",
        text: "Server error — please try again.",
        time: new Date().toLocaleTimeString(),
        form:null,
      };
      setMessages(prev => [...prev, errorMsg]);
    }

    setLoading(false);
  };


    useEffect(() => {
                // Fetch all JSONs in parallel
                const fetchAnimations = async () => {
                  const anims  :any ={};
                  await Promise.all(
                    services.map(async (jsonfile) => {
                      try {
                        const res = await fetch(jsonfile.jsonLink); // each course has its JSON URL
                        const data = await res.json();
                        anims[jsonfile.jsonName] = data; // store by course id
                      } catch (err) {
                        console.error("Failed to load animation:", err);
                      }
                    })
                  );
                  setAnimations(anims);
                };
      fetchAnimations();
    }, []);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      sendMessage();
    }
  };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = chatIconRef.current;
    if (!el) return;

    draggingRef.current = true;
    movedRef.current = false;

    el.setPointerCapture(e.pointerId);

    const rect = el.getBoundingClientRect();
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const el = chatIconRef.current;
    if (!el) return;

    movedRef.current = true;

    const rect = el.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    let x = e.clientX - offsetRef.current.x;
    let y = e.clientY - offsetRef.current.y;

    x = Math.max(0, Math.min(x, innerWidth - rect.width));
    y = Math.max(0, Math.min(y, innerHeight - rect.height));

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.right = "auto";
    el.style.bottom = "auto";
  };
const PADDING = 20; // distance from edges

const onPointerUp = () => {
  draggingRef.current = false;
  const el = chatIconRef.current;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const { innerWidth, innerHeight } = window;

  const distances = {
    left: rect.left,
    right: innerWidth - rect.right,
    top: rect.top,
    bottom: innerHeight - rect.bottom,
  };

  const nearestEdge = Object.entries(distances).reduce((a, b) =>
    a[1] < b[1] ? a : b
  )[0];

  let x = rect.left;
  let y = rect.top;

  switch (nearestEdge) {
    case "left":
      x = 0;
      break;
    case "right":
      x = innerWidth - rect.width - PADDING;
      break;
    case "top":
      y = 0;
      break;
    case "bottom":
      y = innerHeight - rect.height - PADDING;
      break;
  }

  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
};

  return (
    <>
      {/* Floating Chat Icon */}
      <div
  ref={chatIconRef}
  className="chat-icon"
  onPointerDown={onPointerDown}
  onPointerMove={onPointerMove}
  onPointerUp={onPointerUp}
  onPointerCancel={onPointerUp}
  onClick={() => {
    if (!movedRef.current) {
      setOpen(prev => !prev);
    }
  }}
  style={{
    touchAction: "none",
    userSelect: "none",
  }}
      >
        <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1, // equal width in row mode, equal height in column mode
      // width: "100%",
      // flexDirection: "column",
    }}
  >

    <Lottie
      className="lottie-animation"
      animationData={animations["booking_gif"]}  
      loop
      autoplay
      style={{
        width:  "80%",
        height: "100%",
      }}
    />
  </div>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-container">
            <div         style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            boxShadow:"rgba(0, 0, 0, 0.2) 0px 4px 20px",
        }}>
                        <div 

        >
                <img
                style={{
                  borderRadius:"100px",
                  width:"50px",
                  marginBottom:"5px",
        }}
        src="https://res.cloudinary.com/dababspdo/image/upload/v1770040421/3dchatbot_mdwwok.png"
        alt=""
      />
        </div>
            
            <strong>Customer Support</strong>

            <button
              style={styles.closeButton}
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            </div>


          <div 
          className="chat-box"
          ref={chatBoxRef}>



                        {messages.map(msg => (

              <div
                key={msg.id}
                style={{
                  ...styles.message,
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                
                    {msg.role === "user" ? (
                        <div 
                                        style={{
                  ...styles.message,
                  // alignSelf: "flex-start",
                  background: "#daf1ff",
                }}
                        >
                            <div>
                            {msg.text}

                        </div>
                        </div>

                    ):(
                                                    <div >
    
                                                        <div style={{
                                                            width:"50px"
                                                        }}>

                                                            <Lottie
      className="lottie-animation"
      animationData={animations["typing_gif"]}  
      loop
      autoplay
      style={{
        width:  "100%",
        height: "100%",
      }}
    />
                                                        </div>

                    
                        <div 
                                        style={{
                  ...styles.message,
                }}
                        >
               <div>
                {msg.text}


                            {msg.form &&(
                              <div
                              style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:"10px",
                              }}
                              >
                                {Object.entries(msg.form as Record<string, string>).map(
  ([key, value]) => (
    <div key={key}
className="chat-form"
onClick={()=>                setMessages(prev => [...prev,   {
            id: Date.now(),
            role: "bot",
            text: value,
            time: new Date().toLocaleTimeString(),
            form: null,
    }])}
    >
      {/* <h4>{key}</h4> */}
                  <strong>{key}</strong>

      {/* <p>{value}</p> */}
    </div>
  )
)}

                                </div>

                            ) }


                        </div>                        </div>
                                                    </div>

                    )
}
                
                
                <div style={styles.time}>{msg.time}</div>
              </div>
            ))}

            {loading && <div style={styles.botTyping}>Bot is typing...</div>}
          </div>

         <div style={styles.inputRow}>
  <textarea
    ref={textareaRef}
    value={input}
    onChange={e => setInput(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Type a message..."
    className="chat-textarea"
    disabled={isRecording}
  />

  {/* Conditional button */}
  {input.trim() ? (
    // Send Button
    <div
      style={{
        background: "#388DA8",
        borderRadius: "20px",
        height: "40px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        alignSelf: "end",
      }}
      onClick={sendMessage}
    >
      <VscSend style={{ color: "white" }} size={30} />
    </div>
  ) : (
    // Microphone / Hold Button
<div
  onMouseDown={startRecording}
  onMouseUp={stopRecording}
  onMouseLeave={stopRecording}
  onTouchStart={startRecording}
  onTouchEnd={stopRecording}
  style={{
    height: "40px",
    minWidth: "50px",
    padding: "0 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    borderRadius: "20px",
    background: "#388DA8",
    color: "white",
    gap: "5px",
    transition: "all 0.2s ease",
  }}
>
  {isRecording ? (
    <>
      <FaMicrophoneAlt style={{ color: "white" }} />
      Hold
    </>
  ) : (
    <FaMicrophoneAltSlash />
  )}
</div>
  )}
</div>
        </div>
      )}
    </>
  );
}

// Styles
const styles: Record<string, React.CSSProperties> = {
  chatIcon: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 75,
    height: 75,
    borderRadius: "50%",
    // backgroundColor: "#007bff",
    color: "#fff",
    fontSize: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },

  chatContainer: {
    position: "fixed",
    bottom: 100,
    right: 20,
    width: 320,
    maxHeight: 500,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    zIndex: 1000,
    minHeight:400,
  },

  header: {
    padding: 10,
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "#f7f7f7",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  closeButton: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 16,
    color:"blue",
  },

  chatBox: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    overflowY: "auto",
    flex: 1,
    // boxShadow:"rgba(0, 0, 0, 0.2) 0px 4px 20px"
  },

  message: {
    padding: 8,
    borderRadius: 8,
    // maxWidth: "95%",
  },

  time: {
    fontSize: 10,
    opacity: 0.6,
    marginTop: 2,
  },

  inputRow: {
    display: "flex",
    gap: 8,
    padding: 10,
    borderTop: "1px solid #ccc",
    boxShadow:"rgba(0, 0, 0, 0.2) 0px 4px 20px",
    borderRadius:"30px",
  },



  button: {
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    maxHeight:50,
  },

  botTyping: {
    fontStyle: "italic",
    opacity: 0.7,
  },
};
