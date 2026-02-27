import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
// import { useUIEffects } from "./hooks/useUIEffects";
// import { TawkToChat } from "./hooks/talktochat";
import { UIEffectsWrapper } from "./utility/UIEffectsWrapper";
import "./App.css";
import React, { createContext, useState } from "react";
import TermsOfService from "./pages/termsofservice";
import PrivacyPolicy from "./pages/privacypolicy";
import Business from "./pages/businesshub";
import Consumer from "./pages/consumerhub";
import ScrollToTop from "./components/scrolltotop";
import VendorChatBot from "./components/chatbot";
// import ChatBot from "./pages/chatbot";
import AudioChunk from "./components/AudioChunks";
import Internship from "./pages/internship";
import Career from "./pages/career";
import Fulltime from "./pages/fulltime";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import GoogleSignIn from "./components/google";
import Visitor from "./pages/visitor";
import QRScanner from "./pages/qrscan";




export const locateContext = createContext<any>({});

interface User {
  name: string;
  email: string;
  imageUrl: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    imageUrl: "",
  });
  const [chat, setChat] = useState<Boolean>(false);

  return (
    <BrowserRouter>
      {/* Now we are inside Router, safe to use useLocation */}
      <UIEffectsWrapper>
        <locateContext.Provider
          value={{
            user,
            setUser,
            chat,
            setChat,
          }}
        >
          <ScrollToTop />
<div>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/chatbot/:vendorId" element={<VendorChatBot />} />
            <Route path="/businesshub" element={<Business />} />
            <Route path="/consumerhub" element={<Consumer />} />
            <Route path="/audiochunk" element={<AudioChunk />} />
            <Route path="/career" element={<Career />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/fulltime" element={<Fulltime />} />
            {/* <Route path="/signin" element={<GoogleSignIn />} /> */}
            <Route path="/visitor" element={<Visitor />} />
            <Route path="/qrscan" element={<QRScanner />} />




          </Routes>
          <ToastContainer/>
</div>

          {/* <ChatBot /> */}
        </locateContext.Provider>
      </UIEffectsWrapper>
    </BrowserRouter>
  );
};

export default App;
