
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
// import { useUIEffects } from "./hooks/useUIEffects";
import "./App.css"



const App: React.FC = () =>  {
// useUIEffects();
  return (
          <BrowserRouter>
              <Routes>
            <Route path="/" element={<Landing />} /> 

                </Routes>
      </BrowserRouter>
      // <div>
      // {/* <div id="preloader"></div> */}

      //   <Landing/>
      // </div>

  );
};

export default App;
