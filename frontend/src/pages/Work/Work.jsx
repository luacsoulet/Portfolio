import { Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import './Work.sass'
import githubLogo from '/images/github.svg'
import figmaLogo from '/images/figma.svg'

function Work(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // Récupération de l'id avec useParams()
    const { id: queryId } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/api/v1/works/${queryId}`);
            const json = await response.json();
            setData(json.work);
            setLoading(false);
        }
        
        fetchData();
    }, [queryId]);

    if (!data) {
        return <Navigate to={'/*'} replace={true} />
    }
    
    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('je suis sur la page du work', queryId );

    // const { title, description, gitHubRepos, figmaDesign, tags } = data;

    const { title, description, gitHubRepos, figmaDesign, sliderImages, tags } = data;


    return (
        <div className='work'>
            <div className='work__container'>
                <h1 className='work__title'>{title}</h1>
                    <div className='work__content'>
                        <Carrousel 
                            pictures={sliderImages}
                        />
                        <h2 className='work__content-description-title'>Description:</h2>
                    <div className='work__content-description-content'>
                        {description.map((paragraph, i) => (
                            <p 
                                key={`paragraph-${i}`}
                                className='work__content-description-content-pagraph'>{paragraph}
                            </p>
                        ))}
                    </div>
                    <div className='work__content-tags'>
                        {tags.map((tag , i) => (
                            <div key={`tag-${i}`} className='tag__container'>
                                <p className='tag__container-text'>{tag}</p>
                            </div>
                        ))}
                    </div>
                    <div className='work__content-buttons'>
                        <button className='work__content-buttons-button'><a href={gitHubRepos}><img className='githubLogo' src={githubLogo} alt="githubLogo" /></a></button>
                        <button className='work__content-buttons-button'><a href={figmaDesign}><img className='figmaLogo' src={figmaLogo} alt="figmaLogo" /></a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work