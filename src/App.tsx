import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import { useUIEffects } from "./hooks/useUIEffects";
// import { TawkToChat } from "./hooks/talktochat";
import "./App.css";
import React, { createContext, useState } from "react";
import TermsOfService from "./pages/termsofservice";
import PrivacyPolicy from "./pages/privacypolicy";
import Business from "./pages/businesshub";
import Consumer from "./pages/consumerhub";
import ScrollToTop from "./components/scrolltotop";
import ChatBot from "./components/chatbot";

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

  useUIEffects();

  return (
    <BrowserRouter>
      <locateContext.Provider
        value={{
          user,
          setUser,
          chat,
          setChat
        }}
      >
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/chatbot" element={<ChatBot />} />

                          <Route 
            path="/businesshub" 
            element={
              //  <ProtectedRoute>
                    <Business />
              //  </ProtectedRoute>
            } 
        />
                        <Route 
            path="/consumerhub" 
            element={
              //  <ProtectedRoute>
                    <Consumer />
              //  </ProtectedRoute>
            } 
        />
        </Routes>

        {/* 👇 Mount Tawk.to chat widget */}
        {/* <TawkToChat /> */}
      </locateContext.Provider>
    </BrowserRouter>
  );
};

export default App;
