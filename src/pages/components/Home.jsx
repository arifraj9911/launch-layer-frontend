import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Founders from "./Founders/Founders";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Founders/>
            <Features/>
            <Projects/>
            <WhyChooseUs/>
            <Testimonials/>
        </div>
    );
};

export default Home;