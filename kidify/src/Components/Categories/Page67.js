import Header from "../Header";
import Footer from "../Footer";

function Page67({ data }) {
    return (
        <div className='agespage'>
            <div className='header'>
                <Header />
            </div>
            <div className='video-cards'>
                {data
                    .filter((item) => item.category === "6-7")
                    .map((item) => {
                        return (
                            <div className='card-continer-67 card-continer'>
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

export default Page67;
