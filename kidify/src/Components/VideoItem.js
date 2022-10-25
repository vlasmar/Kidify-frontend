import React from "react";
import { NavLink } from "react-router-dom";
import AddToPlaylist from "../Images/add_to_playlist.png";

function VideoItem({ video }) {
  return (
    <NavLink to={`/player/${video._id}`}>
      <div key={video.title}>
        <img src={video.video_img_url} alt={video.title} />
        <div className="card-body">
          <h4>{video.title}</h4>
          <div className="playlist_icon">
            <img src={AddToPlaylist} alt="favorite" />
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default VideoItem;
