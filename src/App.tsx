
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import { useUIEffects } from "./hooks/useUIEffects";
import {TawkToChat} from "./hooks/talktochat"
import ScheduleGmeet from "./components/gmeet"
import "./App.css"



const App: React.FC = () =>  {
useUIEffects();
TawkToChat()
  return (
          <BrowserRouter>
              <Routes>
            <Route path="/" element={<Landing />} /> 
                        <Route path="/gmeet" element={<ScheduleGmeet />} /> 


                </Routes>
      </BrowserRouter>

  );
};

export default App;
