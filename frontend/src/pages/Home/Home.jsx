import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'
import './Home.sass';

function Home(){
    const [workData, setWorkData] = useState([]);
    // let workData = [];

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/api/v1/works');
            const json = await response.json();
            setWorkData(json.works);
        }
        
        fetchData();
    }, []); 
    
    return (
        <div className='home'>
            <div className="home__intro">
                <p className="home__intro-first-sentence">I{"'"}m a passionate web developer,</p>
                <p className="home__intro-second-sentence">I love learning and discovering new things about web development. You{"'"}ll find all the projects I{"'"}ve worked on here.</p>
            </div>
            <div className="home__gallery">
                <div className='home__gallery-title'>Work</div>
                <div className='home__gallery-container'>
                    {workData && workData.length > 0 ? (

                        workData.map((work, i) => (
                            <Card 
                                key={`work-${i}`}
                                title={work.title}
                                image={work.imageCover}
                                tags={work.tags}
                            />
                        ))
                    ) : (
                        <p>Chargement...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;