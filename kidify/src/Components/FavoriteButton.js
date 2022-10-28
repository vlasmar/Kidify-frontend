import axios from 'axios';
import { CDBBtn } from 'cdbreact';
import React, { useEffect, useState } from "react";
import favorite from "../Images/favorite.png";
import favorited from "../Images/favorite-pressed.png";

function FavoriteButton({ userFrom, videoId, videoInfo }) {
  const [Favorited, setFavorited] = useState(false);

  const variable = {
    videoId: videoId,
    videoTitle: videoInfo.title,
    videoArtist: videoInfo.artist,
    video_url_id: videoInfo.video_url_id,
    video_img_url: videoInfo.video_img_url,
    short_description: videoInfo.short_description,
    category: videoInfo.category,
    userFrom: userFrom
    }

  useEffect(() => {
    axios.post(`http://localhost:4000/users/profile/favorites/favorited`, variable, {
      withCredentials: true
    })
    .then(res => {
      if(res.data) {
        setFavorited(res.data.favorited)
      } else {
        alert('Failed to get favorite info')
      }
    })
  }, [])

  const onClickFavorite = () => {
    if (Favorited) {
      axios.put(`http://localhost:4000/users/profile/favorites/removeFromFavorites`, variable, {
        withCredentials: true
      })
      .then(res => {
        if(res.data) {
          setFavorited(!Favorited)
        } else {
          alert('Failed to remove from favorites')
        }
      })

    } else {
      axios.put(`http://localhost:4000/users/profile/favorites/addToFavorites`, variable, {
        withCredentials: true
      })
      .then(res => {
        if(res.data) {
          setFavorited(!Favorited)
        } else {
          alert('Failed to add to favorites')
        }
      })
    }
  }

  return (
      <div>
        <CDBBtn className="favorite-button" onClick={onClickFavorite}>
          {Favorited ? <img src={favorited} alt="favorited" /> : <img src={favorite} alt="favorite"/>}
      </CDBBtn>
      </div>
  );
}

export default FavoriteButton;
