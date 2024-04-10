import PropTypes from 'prop-types';
import './Card.sass'

function Card({title, image, tags}) {

    console.log(tags)
    return (
        <div className='work'>
            <div className='work__image'><img src={image} alt={title} /></div>
            <div className='work__content'>
                <p className='work__content-title'>{title}</p>
                <div className='work__content-tags'>
                    {tags.map((tag , i) => (
                        <div key={`tag-${i}`} className='tag__container'>
                            <p className='tag__container-text'>{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
}

export default Card;