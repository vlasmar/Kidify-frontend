import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button, InputGroup } from "react-bootstrap";
import axios from "axios";
import Sidebar from "./Sidebar";

function CreatePlaylist({ user }) {
  const [playlistInfo, setPlaylistInfo] = useState([]);

  const createPlaylist = (data) => {
    axios
      .post(`http://localhost:4000/users/profile/playlists/create-playlist`, data, {
        withCredentials: true,
      })
      .then((response) => {
        setPlaylistInfo(user.playlists);
        alert("Your playlist is created! Start adding videos")
      })
      .catch((err) => console.log(err));
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="profile">
      <div className="profile-mainpage">
        <Sidebar user={user} />
        <div className="profile-right-column ">
          <InputGroup className="mb-3">
            <input
              placeholder="Type new playlist's name"
              type="text"
              autoFocus
              {...register("name")}
            />
            <Button onClick={handleSubmit(createPlaylist)} type="submit">
              +
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
