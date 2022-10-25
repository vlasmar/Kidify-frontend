import Header from "./Header";
import Footer from "./Footer";
import VideoItem from "./VideoItem";

function Homepage({ data }) {
  return (
    <div className="homepage">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="video-cards">
          {data.map((dataItem) => {
            return (
              <div className="card-container">
                <VideoItem video={dataItem} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
