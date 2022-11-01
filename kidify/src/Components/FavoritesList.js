import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";

function FavoritesList() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/users/profile/favorites`, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setFavorites(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='profile-video-cards'>
            {favorites.map((favorite) => {
                return (
                    <div className='card-container-profile'>
                        <VideoItem video={favorite} />
                    </div>
                );
            })}
        </div>
    );
}

export default FavoritesList;
