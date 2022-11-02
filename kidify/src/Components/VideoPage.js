import YouTube from "@u-wave/react-youtube";
import FavoriteButton from "./FavoriteButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddToPlaylistImage from "../Images/add_to_playlist.png";
import { Button, Modal } from "react-bootstrap";

const VideoPage = ({ user }) => {
  const [videoInfo, setVideoInfo] = useState();
  const [playlistsList, setPlaylistsList] = useState([]);
  const [show, setShow] = useState(false);

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

      axios
      .get(`http://localhost:4000/users/profile/playlists`, {
        withCredentials: true
      })
      .then((response) => {
        console.log(response.data);
        setPlaylistsList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleModal = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  const addVideoToPlaylist = (data) => {
    axios
      .put("http://localhost:4000/users/profile/playlists/add-video", data, {
        withCredentials: true,
      })
      .then((response) => {});
  };

  return (
    <div className="videopage">
      {videoInfo && (
        <div className="video_player">
          <YouTube
            video={videoInfo.video_url_id}
            width={1100}
            height={700}
            autoplay
            controls={true}
            modestBranding={1}
          />
          <div className="video_details">
            <div className="video_title">
              <h2>{videoInfo.title}</h2>
              {user ? (
                <>
                  <FavoriteButton
                    user={user}
                    videoId={videoInfo._id}
                    videoInfo={videoInfo}
                  />
                  <div className="playlist_icon">
                    <img
                      onClick={handleModal}
                      src={AddToPlaylistImage}
                      alt="favorite"
                    />
                  </div>
                  <Modal show={show} onHide={handleModal}>
                    <Modal.Header>
                      Choose playlist
                    </Modal.Header>
                    <Modal.Body>
                    <div className="profile-video-cards">
            {playlistsList.length > 0 ? (
              playlistsList.map((listItem) => {
                return (
                  <p>{listItem.name}</p>
                );
              })
            ) : (
              <div> Your list is empty. Start adding your favorite videos.</div>
            )}
          </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={handleModal}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </>
              ) : null}
            </div>

            <hr />
            <h4>{videoInfo.artist}</h4>
            <h5>Description:</h5>
            <div className="video_description">
              {videoInfo.short_description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
