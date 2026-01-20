import { Link } from 'react-router';
import './card-category.styles.scss';

const CardCategory =  ({category}) => {
    const { imageUrl, title} = category;
    
    return (
        <Link to="/" className='card-category-container'>
            <div className='card-container'>
                <img 
                    className='image' 
                    src={imageUrl} 
                    alt={`${title} category`}
                />
                <h2 className='title'>{title} /</h2>
            </div>
        </Link>
    )
}

export default CardCategory;