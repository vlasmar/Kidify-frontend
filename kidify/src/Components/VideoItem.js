import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AddToPlaylist from "../Images/add_to_playlist.png";

function VideoItem({ video }) {
  const [playlistInfo, setPlaylistInfo] = useState([]);

  const onClickPLaylist = () => {
    
  };

  return (
    <NavLink to={`/player/${video._id}`}>
      <div key={video.title}>
        <img src={video.video_img_url} alt={video.title} />
        <div className="card-body">
          <h4>{video.title}</h4>
          <button onClick={onClickPLaylist} className="playlist_icon">
            <img src={AddToPlaylist} alt="favorite" />
          </button>
        </div>
      </div>
    </NavLink>
  );
}

export default VideoItem;

