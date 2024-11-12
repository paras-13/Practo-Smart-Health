import "./App.css";
import { Route, Routes } from "react-router-dom";
import Medicine from './Components/Medicines/Medicine';
import Lab from './Components/LabTest/Lab'
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

import  Finddoctors  from "./Components/Finddoctors/Finddoctors";
import Homepage from "./Components/Home/Homepage";
import Videoconsult from "./Components/Videoconsult/Videoconsult";
import Appdownload from "./Components/Videoconsult/Appdownload";
import Auth from './Components/Auth/Auth/Auth';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/"
          element={
            <>
              <Homepage />
            </>
          }
        />

        <Route path="/medicine"  element={ <><Medicine /></> } />
        <Route path="/labtest" 
        element={
            <>
              <Lab />
              <Appdownload />{" "}
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Videoconsult" element={<Videoconsult />} />
        <Route path="/finddoctors" element={<Finddoctors />} />

      </Routes>
      <Footer />
    </div>
  );
}
export default App;