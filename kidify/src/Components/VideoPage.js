import YouTube from '@u-wave/react-youtube'; 
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
    <div>
      {videoInfo && (
        <div>
        <YouTube
          video={videoInfo.video_url_id}
          width={640}
          height={480}
          autoplay
          controls={false}
        />
        </div>
      )}
    </div>
  );
};

export default VideoPage;
