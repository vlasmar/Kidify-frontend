import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import About from "./Components/About";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className='wrapper'>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
           <Route path='/username' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
