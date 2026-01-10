import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import { useUIEffects } from "./hooks/useUIEffects";
import { TawkToChat } from "./hooks/talktochat";
import ScheduleGmeet from "./components/gmeet";
import "./App.css";
import React, { createContext, useState } from "react";
import TermsOfService from "./pages/termsofservice";
import PrivacyPolicy from "./pages/privacypolicy";
import Business from "./pages/businesshub";
import Consumer from "./pages/consumerhub";
import ScrollToTop from "./components/scrolltotop";

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

  useUIEffects();

  return (
    <BrowserRouter>
      <locateContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gmeet" element={<ScheduleGmeet />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
        <TawkToChat />
      </locateContext.Provider>
    </BrowserRouter>
  );
};

export default App;
