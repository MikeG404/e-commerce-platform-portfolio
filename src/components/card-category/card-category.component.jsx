import './card-category.styles.scss';

const CardCategory =  ({category}) => {
    const { imageUrl, title} = category;
    
    return (
        <div className='card-category-container'>
            <div className='image-container'>
                <img 
                    className='image' 
                    src={imageUrl} 
                    alt={`${title} category`}
                />
                <h2 className='title'>{title} /</h2>
            </div>
        </div>
    )
}

export default CardCategory;