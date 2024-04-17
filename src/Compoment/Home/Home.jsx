import Cards from "./Cards/Cards";
import Corusel from "./Corusel/Corusel";
import Services from "./Services/Services";
import Stat from "./Stat/Stat";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {
    return (
        <div className="max-w-7xl m-auto">
            <Corusel></Corusel>
            <Cards></Cards>
            <Services></Services>
            <Stat></Stat>
        </div>
    );
};

export default Home;