import './home.styles.scss';
import CardCategory from "../../components/card-category/card-category.component";

const Home = () => {

    return (
        <section className="home-route-container">
            <CardCategory />
            <CardCategory />
            <CardCategory />
        </section>
    )
}

export default Home;