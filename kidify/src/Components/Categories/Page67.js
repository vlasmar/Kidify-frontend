import Header from "./Header";
import Footer from "./Footer";

function Page67({data}) {
    return (
        <div className='agespage'>
            <div className='header'>
                <Header />
            </div>
            {data
            .filter(item => item.category === "6-7")
            .map(item => {
            return(
                <div>
                <img src={item.video_img_url} alt={item.title}/>
            <div>{item.title}</div>
            </div>
            )}
            )}
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Page67;