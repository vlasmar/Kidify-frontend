import Header from "./Header";
import Footer from "./Footer";
import Logo from "../Images/kidify-logo.png";

function About({ medium }) {
    return (
        <div className='aboutpage'>
            <div className='header'>
                <Header />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        marginBottom: "50px",
                        marginTop: "50px",
                        width: "70%",
                        color: "black",
                        fontSize: "25px",
                    }}
                >
                    <h1 style={{ fontFamily: "cursive" }}>Our mission</h1>
                    <p>is to create a magic portal for you to watch videos for children from all around the web and create your own playlists with as few clicks as possible.</p>
                    <p>Create and play your own playlists and relax. It's literally kids' play.</p>
                    <p>You can watch all provided videos and create temporary playlists without even signing up. But behold: as soon as you log out, your portal will close. If you want Lullifey to maintain your portal, sign up!</p>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {
                    <div
                        style={{
                            marginBottom: "30px",
                            marginTop: "20px",
                            width: "70%",
                            color: "black",
                            fontSize: "20px",
                        }}
                    >
                        <h1 style={{ fontFamily: "cursive" }}>Meet Our Team</h1>
                        <img className='logo' src={Logo} alt='logo' />
                        <img className='logo' src={Logo} alt='logo' />
                    </div>
                }
            </div>

            <Footer />
        </div>
    );
}

export default About;
