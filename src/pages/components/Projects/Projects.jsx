import ProjectCard from "../../ui/ProjectCard";
import ecommerceImg from "../../../assets/images/ecommerce.svg";
import mobileImg from "../../../assets/images/mobile.svg";
import healthImg from "../../../assets/images/health.svg";
import aiImg from "../../../assets/images/ai.svg";
import BlurCorner from "../../ui/BlurCorner";

const projects = [
  {
    image: ecommerceImg,
    type: "SaaS",
    title: "E-commerce SaaS Platform",
    description: "Full-stack e-commerce solution with payment processing",
    tech: ["React", "Node.js", "Stripe"],
  },
  {
    image: mobileImg,
    type: "Mobile App",
    title: "FinTech Mobile App",
    description: "Full-stack e-commerce solution with payment processing",
    tech: ["React Native", "Fire Base", "Plaid"],
  },
  {
    image: healthImg,
    type: "Web App",
    title: "Healthcare Dashboard",
    description: "Full-stack e-commerce solution with payment processing",
    tech: ["React", "Node.js", "Stripe"],
  },
  {
    image: aiImg,
    type: "AI/ML",
    title: "AI Content Generator",
    description: "AI-powered content creation platform",
    tech: ["Python", "Open Ai", "First API"],
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-4 text-white relative mt-20">
      <BlurCorner right={true}/>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-[48px] font-bold mb-5">Featured Projects</h2>
            <p className="text-[#D1D1D1] text-lg font-normal">
              Take a look at some of our recent work. Each project represents a
              successful <br /> launch and happy client.
            </p>
          </div>
          <button
            style={{
              background:
                "linear-gradient(183deg, #966C9E 50%, #F3B880 129.63%)",
            }}
            className=" text-white px-[18px] py-4 rounded-lg text-xl font-medium "
          >
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
