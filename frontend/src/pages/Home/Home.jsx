import './Home.sass';

function Home(){

    return (
        <div>
            <div className="home-intro">
                <p className="home-intro-first-sentence">I{"'"}m a passionate web developer,</p>
                <p className="home-intro-second-sentence">I love learning and discovering new things about web development. You{"'"}ll find all the projects I{"'"}ve worked on here.</p>
            </div>
            <div className="home-gallery">
                <div className="home-gallery-container"></div>
            </div>
        </div>
    )
}

export default Home;