import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";

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
                <NavLink to={`/player/${dataItem._id}`}>
              <div className="card-container" key={dataItem.title}>
                <img src={dataItem.video_img_url} alt={dataItem.title}/>
                <h4>{dataItem.title}</h4>
              </div>
              </NavLink>
            );
          })}
          <div className='footer'>
             <Footer />
          </div>
          </div>
        </div>
    );
}

export default Homepage;
