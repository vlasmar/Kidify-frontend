import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Page03 from "./Components/Categories/Page03";
import Page45 from "./Components/Categories/Page45";
import Page67 from "./Components/Categories/Page67";
import AdminPage from "./Components/AdminPage/AdminPage";
import VideoPage from "./Components/VideoPage";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/videos`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/preschool" element={<Page03 data={data} />} />
          <Route path="/grade-k" element={<Page45 data={data} />} />
          <Route path="/grade-1" element={<Page67 data={data} />} />
          <Route path="/upload_video" element={<AdminPage />} />
          <Route path="/player/:id" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
