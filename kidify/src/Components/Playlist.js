import React from "react";
import VideoItem from "./VideoItem";

function Playlist({user}) {

  const { playlist_id } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState();

    useEffect(() => { 
          axios
          .get(`http://localhost:4000/users/profile/${playlist_id}`, {
            withCredentials: true
          })
          .then((response) => {
            console.log(response.data);
            setPlaylistInfo(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [playlist_id]);

  return (
    <div>
      <h4>{playlistInfo.name}</h4>
        {playlistInfo &&
          playlistInfo.videos.map((item, index) => {
            return <div key={index} className="card-container"><VideoItem video={item} /></div>;
          })
        }
    </div>
  );
}

export default Playlist;