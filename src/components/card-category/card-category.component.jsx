import './card-category.styles.scss';

const CardCategory =  () => {
    
    return (
        <div className='card-category-container'>
            <div className='image-container'>
                <img 
                    className='image' 
                    src="https://www.realsimple.com/thmb/pylBi8okBliW5e5qvCQFWPQatoc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-denim-GettyImages-598820544-c87ecea4d6454e4a9184a35226c97735.jpg" 
                    alt="Jeans Category"
                />
                <h2 className='title'>Jeans /</h2>
            </div>
        </div>
    )
}

export default CardCategory;