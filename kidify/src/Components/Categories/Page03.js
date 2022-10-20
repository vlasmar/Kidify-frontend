import Header from "../Header";
import Footer from "../Footer";

function Page03({ data }) {
    return (
        <div className='agespage'>
            <div className='header'>
                <Header />
            </div>
            <div className='video-cards'>
                {data
                    .filter((item) => item.category === "0-3")
                    .map((item) => {
                        return (
                            <div className='card-container-03 card-container'>
                                <div>
                                    <img src={item.video_img_url} alt={item.title} />
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Page03;
