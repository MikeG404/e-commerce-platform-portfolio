import { Link } from 'react-router';
import './category-card.styles.scss';

const CategoryCard =  ({category}) => {
    const { imageUrl, title} = category;
    
    return (
        <Link to={`/shop/${title}`} className='category-card-container'>
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

export default CategoryCard;