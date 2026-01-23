import './home.styles.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories-slice/categories.slice';
import { getCategories } from '../../utils/firebase/firebase.util';
import CardCategoriesPreview from '../../components/categories-preview/categories-preview.component';

const Home = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    
    useEffect(() => {
        const getCategoriesData = async () => {
            const categoriesData = await getCategories();            
            dispatch(setCategories(categoriesData))
        }
        getCategoriesData();
    }, [])    

    return (
        <section className="home-route-container">
            <CardCategoriesPreview categories={categories} />
        </section>
    )
}

export default Home;