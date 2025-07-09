import WhyChooseServiceCard from "../../ui/WhyChooseServiceCard";
import whyChooseImg from "../../../assets/images/why_choose.svg";
import SharedLinearBg from "../../ui/sharedLinearBg";

import deliveryIcon from "../../../assets/images/icons/delivery.svg";
import strategyIcon from "../../../assets/images/icons/strategy.svg";
import expertiseIcon from "../../../assets/images/icons/expertise.svg";
import founderIcon from "../../../assets/images/icons/founder.svg";
import BlurCorner from "../../ui/BlurCorner";

const services = [
  {
    icon: deliveryIcon,
    title: "Fast Delivery with Clean Code",
    description:
      "Our team ensures lightning-fast delivery while maintaining the highest coding standards. We write clean, maintainable, and scalable code that saves you time, reduces technical debt.",
  },
  {
    icon: strategyIcon,
    title: "Strategy-Based UI",
    description:
      "Our UI design isn’t just about looks—it’s built on research, user behavior, and business goals. Every element is crafted to guide users seamlessly, drive engagement, and support your overall strategy.",
  },
  {
    icon: expertiseIcon,
    title: "Flippa-Ready Product Expertise",
    description:
      "Our team specializes in creating high-quality, revenue-ready websites and SaaS products tailored for Flippa’s marketplace. From design to deployment, every detail is optimized to stand out.",
  },
  {
    icon: founderIcon,
    title: "Founder-Led Team",
    description:
      "With a founder-led team, you get hands-on expertise and a personal commitment to excellence. Every project benefits from strategic oversight, ensuring your vision is realized with precision and passion.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 relative text-white mt-20">
      <BlurCorner />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 mb-8">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center gap-4">
          {/* content */}
          <div>
            <h2 className="text-[48px] font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-b from-[#966C9E] to-[#F3B880] bg-clip-text text-transparent">
                LaunchLayer
              </span>
            </h2>
            <p className="text-[#D1D1D1] text-lg font-normal mb-10">
              Transform your ideas into powerful digital products. From MVP
              development to full-scale launches, we’re the founding team.
            </p>
            <button
              style={{
                background:
                  "linear-gradient(183deg, #966C9E 50%, #F3B880 129.63%)",
              }}
              className=" text-white px-4 py-3 rounded-lg text-xl font-medium "
            >
              Learn More
            </button>
          </div>

          {/* image */}
          <div className="w-3/5 h-auto">
            <img src={whyChooseImg} alt="why_choose" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          {services.map((service, index) => (
            <WhyChooseServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <SharedLinearBg />
    </div>
  );
};

export default WhyChooseUs;
