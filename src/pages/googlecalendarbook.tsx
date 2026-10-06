
// import Testimonials from '../components/Testimonials';
// import ClientsSection from '../components/Clients'
import GoogleReviews from "../components/googlereviews";
// import { TawkToChat } from "../hooks/talktochat";
// import ChatBot from "./chatbot";
import VendorChatBot from "../components/chatbot";
import BookHeader from "../components/BookHeader";
import PoweredbyFooter from "../components/poweredbyfooter";
import ConsumerAbout from "../components/consumerabout";
import { useParams } from "react-router-dom";
// import { useEffect } from "react";



function GoogleCalendarBook() {
    const { vendorId } = useParams(); // Grab vendorId from URL
  // const apiUrl = "https://chatbot-production-5ad5.up.railway.app/api/chat";
  // const apiUrl = "http://localhost:8000/api/chat";
  console.log("Vendor ID from URL:", vendorId);
//   const apiUrl = "https://chatbot-n6w7.onrender.com/api/chat";

//    /* ---------------- FETCH WELCOME ---------------- */
//       const fetchApi = async () => {
//             // setLoading(true);
  
//         try {
//           const res = await fetch(apiUrl, {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({  vendorId }),
//           });
  
//           const data = await res.json();
//           console.log("API Response:", data);
  
//     //           const userMessage: Message = {
//     //           id: Date.now(),
//     //           role: "bot",
//     //           text: data.response?.message || "Hello 👋 How can I help you today?",
//     //           time: new Date().toLocaleTimeString(),
//     //           form:data.response?.form || null,
//     //   };
//             //   setMessages(prev => [...prev, userMessage]);
  
//         } catch(err) {
//         //         const errorMsg: Message = {
//         //   id: Date.now() + 2,
//         //   role: "bot",
//         //   text: "Server error — please try again.",
//         //   time: new Date().toLocaleTimeString(),
//         //   form:null,
//         // };
//         console.log(err)
//         // setMessages(prev => [...prev, errorMsg]);
  
//         }
//             // setLoading(false);
  
//       };
  
//     useEffect(() => {

//       fetchApi();
//     }, []);

  return (
    <div  style={{
        width:"100vw"
    }}>


 <BookHeader />


{/* <ConsumerHero /> */}
            <div   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  }}>
  <img
    className="advocate-image"
    src="https://res.cloudinary.com/dababspdo/image/upload/v1791309401/WhatsApp_Image_2026-10-06_at_11.23.29_PM_u1vyi5.jpg"
    alt="Abirami Chinnasamy - Advocate"
  />
</div>
      <ConsumerAbout />
      <GoogleReviews/>
      {/* <Contact /> */}
      <PoweredbyFooter />
{/* <TawkToChat enabled={true} /> */}
      <VendorChatBot />
{/* <ChatBot/> */}
    </div>

  )
}

export default GoogleCalendarBook
