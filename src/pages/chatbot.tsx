// import { div } from "framer-motion/client";
import { useState, useRef, useEffect } from "react";
// import type { KeyboardEvent } from "react";
import { VscSend } from "react-icons/vsc";
import Lottie from "lottie-react";


const INITIAL_BOT_MESSAGE: Message = {
  id: 1,
  role: "bot",
  text: "Hello 👋 Welcome to Minsway Solutions. How can I help you today?",
  time: new Date().toLocaleTimeString(),
};


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
      title: 'Smart Booking',
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
}

interface ChatApiResponse {
  response?: string;
  leave_days?: number;
  intent?: string;
  confidence?: number;
}

export default function ChatBot() {
                {/* Welcome message */} 

  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false); // Chat open/close
           const [animations, setAnimations] = useState<Animations>({});
           const vendorId = "9940"
           const apiUrl = "http://localhost:8000/api/chat"
  



  const chatBoxRef = useRef<HTMLDivElement>(null);

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

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
      time: new Date().toLocaleTimeString(),
    };
        setInput("");



    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
const controller = new AbortController();

const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input, vendorId  }),
          signal: controller.signal,
      });
      clearTimeout(timeoutId);


      const data: ChatApiResponse = await res.json();

      let botText = "I didn't understand that.";
      if (data.leave_days !== undefined) {
        botText = `You have ${data.leave_days} leave days remaining.`;
      } else if (data.response) {
        botText = data.response;
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: botText,
        time: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err:any) {
  if (err instanceof DOMException && err.name === "AbortError") {
                          const errorMsg: Message = {
        id: Date.now() + 2,
        role: "bot",
        text: "Request timed out",
        time: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, errorMsg]);

                    // setError("Request timed out");
                  }else {
      const errorMsg: Message = {
        id: Date.now() + 2,
        role: "bot",
        text: "Server error — please try again.",
        time: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, errorMsg]);
                  }

    }
    setLoading(false);
  };

//   const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") sendMessage();
//   };


  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const MIN_HEIGHT = 40; // min height in px
  const MAX_HEIGHT = 120; // max height in px

  // Adjust height on every change
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset to recalc
      const newHeight = Math.min(
        Math.max(textareaRef.current.scrollHeight, MIN_HEIGHT),
        MAX_HEIGHT
      );
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [input]);
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

// const [botmessage, setBotMessage] = useState<Message>({
//   id: Date.now(),
//   role: "bot",
//   text: "Loading welcome message...", // temporary
//   time: new Date().toLocaleTimeString(),
// });

// // Fetch vendor-specific welcome message
// useEffect(() => {
//   const fetchWelcome = async () => {
//     try {
//       const res = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: "hi", vendorId }),
//       });
//       const data: ChatApiResponse = await res.json();
//       setBotMessage({
//         id: Date.now(),
//         role: "bot",
//         text: data.response || "Hello 👋 How can I help you today?",
//         time: new Date().toLocaleTimeString(),
//       });
//             setMessages(prev => [...prev, botmessage]);

//     } catch {
//       setBotMessage({
//         id: Date.now(),
//         role: "bot",
//         text: "Hello 👋 How can I help you today?",
//         time: new Date().toLocaleTimeString(),
//       });
//                   setMessages(prev => [...prev, botmessage]);

//     }
//   };

//   fetchWelcome();
// }, [apiUrl, vendorId]);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      sendMessage();
    }
  };
  return (
    <>
      {/* Floating Chat Icon */}
      <div
        style={styles.chatIcon}
        onClick={() => setOpen(prev => !prev)}
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

{animations["booking_gif"] && (
  <Lottie
    animationData={animations["booking_gif"]}
    loop
    autoplay
    style={{ width: "80%", height: "100%" }}
  />
)}
  </div>
      </div>

      {/* Chat Window */}
      {open && (
        <div style={styles.chatContainer}>
            <div         style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            boxShadow:"rgba(0, 0, 0, 0.2) 0px 4px 20px"
        }}>
                        <div 

        >
                <img
                style={{
                  borderRadius:"100px",
                  width:"60px",
                  marginBottom:"5px"
        }}
        src="./logo.png"
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


          <div style={styles.chatBox} ref={chatBoxRef}>

{/* 
            {messages.map(msg => (

              <div
                key={msg.id}
                style={{
                  ...styles.message,
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  background: msg.role === "user" ? "#daf1ff" : "#f1f1f1",
                }}
              >
                {msg.text}
                <div style={styles.time}>{msg.time}</div>
              </div>
            ))} */}


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
                  alignSelf: "flex-start",
                  background: "#daf1ff",
                }}
                        >
                            <div>
                            {msg.text}

                        </div>
                        </div>

                    ):(
                                                    <div style={{
                                                        display:"flex",
                                                        flexDirection:"row",
                                                        gap:"5px",
                                                        alignItems:"start",
                                                    }}>
                                                        {/* <div>
                                <VscRobot size={40} style={{
                                    // color:"#388DA8"
                                                                        color:"orange"

                                }}/>

                                                        </div> */}
                                                        <div style={{
                                                            maxWidth:"40px"
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
                  alignSelf:  "flex-end" ,
                  background: "#f1f1f1" ,
                  width:"90%"
                }}
                        >
               <div>
                            {msg.text}


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
      style={{
        width: "100%",
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
        resize: "none",
        padding: "8px 12px",
        fontSize: 14,
        borderRadius: 6,
        border: "1px solid #ccc",
        overflowY: "auto",
        boxSizing: "border-box",
        background:"white",
        color:"black",
      }}
    />

            <div     
style={{
                                    background:"#388DA8",
                                borderRadius:"20px",
                                height:"40px",
                                width:"50px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                                cursor:"pointer",

}}
                          onClick={sendMessage}

              >
            <VscSend
                        style={{
                color:"white",


            }} size={30}

            />

            </div>

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
  },

  chatBox: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    overflowY: "auto",
    flex: 1,
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
  },

//   input: {
//     flex: 1,
//     // padding: 8,
//     // borderRadius: 6,
//     // border: "1px solid #ccc",
//         width: "100%",       // full width of parent container
//     height: 40,          // fixed height in pixels
//     padding: "8px 12px", // inner spacing
//     fontSize: 14,        // text size
//     borderRadius: 6,
//     border: "1px solid #ccc",
//   },

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
