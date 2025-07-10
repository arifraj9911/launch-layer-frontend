import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Founders from "./Founders/Founders";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import TurningIdea from "./TurningIdea/TurningIdea";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <Founders/>
            <Features/>
            <Projects/>
            <WhyChooseUs/>
            <Testimonials/>
            <TurningIdea/>
        </div>
    );
};

export default Home;