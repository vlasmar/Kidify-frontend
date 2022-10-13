import Header from "./Header";
import Footer from "./Footer";


function Homepage () {
    return(
        <div className="homepage">
            <div className='header'>
                <Header />
            </div>
            <h1>Hello</h1>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage;