import VideoItem from "./VideoItem";

function Homepage({ data }) {
  return (
    <div className="homepage">
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
    </div>
  );
}

export default Homepage;
