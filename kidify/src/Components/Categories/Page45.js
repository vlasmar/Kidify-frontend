import Header from "../Header";
import Footer from "../Footer";
import VideoItem from "../VideoItem";

function Page45({ data }) {
    return (
        <div className='agespage'>
            <div className='header'>
                <Header />
            </div>
            <div className='container'>
                <h1 style={{ fontFamily: "cursive", margin: "20px" }}>Ages 4-5</h1>

                <div className='video-cards'>
                    {data
                        .filter((item) => item.category === "4-5")
                        .map((item) => {
                            return (
                                <div className='card-container-45 card-container'>
                                    <div>
                                        <VideoItem video={item} />
                                    </div>
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

export default Page45;
