import './Home.sass';

function Home(){

    return (
        <div className='home'>
            <div className="home__intro">
                <p className="home__intro-first-sentence">I{"'"}m a passionate web developer,</p>
                <p className="home__intro-second-sentence">I love learning and discovering new things about web development. You{"'"}ll find all the projects I{"'"}ve worked on here.</p>
            </div>
            <div className="home__gallery">
                <div className="home__gallery-container"></div>
            </div>
        </div>
    )
}

export default Home;