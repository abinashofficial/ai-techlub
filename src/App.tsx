import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import { useUIEffects } from "./hooks/useUIEffects";
import { TawkToChat } from "./hooks/talktochat";
import ScheduleGmeet from "./components/gmeet";
import "./App.css";
import React, { createContext, useState } from "react";
import TermsOfService from "./pages/termsofservice";
import PrivacyPolicy from "./pages/privacypolicy";

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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gmeet" element={<ScheduleGmeet />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        {/* 👇 Mount Tawk.to chat widget */}
        <TawkToChat />
      </locateContext.Provider>
    </BrowserRouter>
  );
};

export default App;
