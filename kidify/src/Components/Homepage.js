import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import AddToPlaylist from "../Images/add_to_playlist.png";

function Homepage({ data }) {
    return (
        <div className='homepage'>
            <div className='header'>
                <Header />
            </div>
            <div className='container'>
                <div className='video-cards'>
                    {data.map((dataItem) => {
                        return (
                            <div className='card-container'>
                                <NavLink to={`/player/${dataItem._id}`}>
                                    <div key={dataItem.title}>
                                        <img src={dataItem.video_img_url} alt={dataItem.title} />
                                        <div className='cardbody'>
                                            <h4>{dataItem.title}</h4>
                                            <div className='playlist_icon'>
                                                <img src={AddToPlaylist} alt='favorite' />
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;
