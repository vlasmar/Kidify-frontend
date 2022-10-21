import Header from "./Header";
import Footer from "./Footer";
import YouTube from "@u-wave/react-youtube";
import Favorite from "../Images/favorite.png";
import FavoritePressed from "../Images/favorite-pressed.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoPage = () => {
    const [videoInfo, setVideoInfo] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:4000/videos/${id}`)
            .then((response) => {
                console.log(response.data);
                setVideoInfo(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='videopage'>
            <div className='header'>
                <Header />
            </div>
            {videoInfo && (
                <div className='video_player'>
                    <YouTube video={videoInfo.video_url_id} width={1100} height={700} autoplay controls={true} />
                    <div className='video_details'>
                        <div className='video_title'>
                            <h2>{videoInfo.title}</h2>
                            <img src={FavoritePressed} src={Favorite} width='80px' alt='favorite' />
                            {/* <img src={FavoritePressed} width='80px' alt='favorite' /> */}
                        </div>
                        <hr />
                        <h4>{videoInfo.artist}</h4>
                        <h5>Description:</h5>
                        <div className='video_description'>{videoInfo.short_description}</div>
                    </div>
                </div>
            )}
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default VideoPage;
