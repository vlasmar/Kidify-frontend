import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import About from "./Components/About";
import Profile from './Components/Profile';
import AgesPage from './Components/AgesPage';

function App() {
  return (
    <div className='wrapper'>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
           <Route path='/:username' element={<Profile />} />
           <Route path='/preschool' element={<AgesPage title={title1} />} />
           <Route path="/grade-k" element={<AgesPage title={title2} /> } />
           <Route path="/grade-1" element={<AgesPage title={title3} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
