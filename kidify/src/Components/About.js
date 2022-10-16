import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Team1 from "../Images/team_1.jpg";

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
                        marginBottom: "13px",
                        marginTop: "25px",
                        width: "70%",
                        color: "black",
                        fontSize: "22px",
                    }}
                >
                    <div className='about_mission'>
                        <h1 style={{ fontFamily: "cursive" }}>Our mission</h1>
                    </div>

                    <p>is to Create a website with fun educational videos for kids. you to watch fun educational videos for children from all around the web and create your own playlists with as few clicks as possible. Create and play your own playlists and relax.</p>
                    <p>Our vision is for the website to be the source of childhood learning on the internet.</p>
                    <p>You can watch all provided videos and create temporary playlists without even signing up. But behold: as soon as you log out, your portal will close. If you want kidify to maintain your portal, sign up!</p>
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
                            marginBottom: "20px",
                            marginTop: "18px",
                            width: "70%",
                            color: "black",
                            fontSize: "20px",
                        }}
                    >
                        <h1 style={{ fontFamily: "cursive" }}>Meet Our Team</h1>
                        <div className='aboutcards'>
                            <div className='aboutcard_1'>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant='top' src={Team1} alt='team1' />
                                    <Card.Body>
                                        <Card.Title>Priyanka Bed</Card.Title>
                                        <Card.Text>Full Stack Developer</Card.Text>
                                        <Card.Link href='https://www.linkedin.com/in/priyankaben-bed/'>Linkedin</Card.Link>
                                        <Card.Link href='https://github.com/PriyankaBed'>Gith hub</Card.Link>
                                    </Card.Body>
                                </Card>{" "}
                            </div>
                            <div className='aboutcard_2'>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant='top' src={Team1} alt='team1' />
                                    <Card.Body>
                                        <Card.Title>Maria Vlasopoulou</Card.Title>
                                        <Card.Text>Full Stack Developer</Card.Text>
                                        <Card.Link href='https://www.linkedin.com/in/maria-vlasopoulou-20527b162/'>Linkedin</Card.Link>
                                        <Card.Link href='https://github.com/vlasmar'>Gith hub</Card.Link>
                                    </Card.Body>
                                </Card>{" "}
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default About;
