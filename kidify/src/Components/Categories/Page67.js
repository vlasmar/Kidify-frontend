import VideoItem from "../VideoItem";

function Page67({ data }) {
  return (
    <div className="agespage">
      <div className="container">
        <h1 style={{ fontFamily: "cursive", padding: "30px" }}>Ages 6-7</h1>

        <div className="video-cards">
          {data
            .filter((item) => item.category === "6-7")
            .map((item) => {
              return (
                <div className="card-container-67 card-container">
                  <div>
                    <VideoItem video={item} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Page67;
