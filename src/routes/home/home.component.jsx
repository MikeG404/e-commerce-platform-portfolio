import './home.styles.scss';
import CardCategoriesPreview from '../../components/categories-preview/categories-preview.component';
import { useSelector } from 'react-redux';

const Home = () => {
    const { categories } = useSelector(state => state.categories)    

    return (
        <section className="home-route-container">
            <CardCategoriesPreview categories={categories} />
        </section>
    )
}

export default Home;