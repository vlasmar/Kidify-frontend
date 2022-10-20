import Header from "./Header";
import Footer from "./Footer";
import { Container, Col, Row, Button } from "react-bootstrap";

function Homepage({ data }) {
    return (
        <div className='homepage'>
            <div className='header'>
                <Header />
                <div className='video-cards'>
                    {data.map((dataItem) => {
                        return (
                            <div className='card-continer'>
                                <div key={dataItem.title}>
                                    <img src={dataItem.video_img_url} />
                                    <h4>{dataItem.title}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
