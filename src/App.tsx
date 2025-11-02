
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import { useUIEffects } from "./hooks/useUIEffects";
import {TawkToChat} from "./hooks/talktochat"
import ScheduleGmeet from "./components/gmeet"
import "./App.css"
import React, { createContext, useState } from "react";



export const locateContext = createContext<any>({});
interface User {
  name: string;
  email: string;
  imageUrl: string;
}

const App: React.FC = () =>  {
    const [user, setUser] = useState<User>({
    name: "",
    email: "",
    imageUrl: "",
  });
useUIEffects();
TawkToChat()
  return (
          <BrowserRouter>
                <locateContext.Provider
          value={{
            user:user,
            setUser:setUser,
          }}>




              <Routes>
            <Route path="/" element={<Landing />} /> 
                        <Route path="/gmeet" element={<ScheduleGmeet />} /> 


                </Routes>
                          </locateContext.Provider>

      </BrowserRouter>

  );
};

export default App;
