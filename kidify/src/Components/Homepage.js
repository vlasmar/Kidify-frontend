import Header from "./Header";
import Footer from "./Footer";

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
              <div key={dataItem.title}>
                <img src={dataItem.video_img_url} />
                <h4>{dataItem.title}</h4>
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
