import FeatureCard from "../../ui/FeatureCard";

import webIcon from '../../../assets/images/icons/web.svg'
import uxIcon from '../../../assets/images/icons/ux.svg'
import saasIcon from '../../../assets/images/icons/saas.svg'
import digitalIcon from '../../../assets/images/icons/digital.svg'
import flippaIcon from '../../../assets/images/icons/flippa.svg'

const features = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    iconSrc: webIcon,
    highlighted: true,
  },
  {
    title: "UI/UX Design",
    description:
      "We craft intuitive, user-centric interfaces that deliver seamless digital experiences.",
    iconSrc: uxIcon,
    highlighted: false,
  },
  {
    title: "SaaS MVP Development",
    description:
      "Our SaaS MVP development services help you turn your idea into a market-ready product quickly and cost-effectively.",
    iconSrc: saasIcon,
    highlighted: false,
  },
  {
    title: "Digital Marketing",
    description:
      "We help businesses amplify their online presence through strategic digital marketing solutions. From SEO and social media to paid.",
    iconSrc: digitalIcon,
    highlighted: false,
  },
  {
    title: "Flippa Product Builds",
    description:
      "We build high-quality, revenue-ready websites and SaaS products designed to sell fast on Flippa. Start with a digital asset.",
    iconSrc: flippaIcon,
    highlighted: false,
  },
];

const Features = () => {
  return (
    <div className="py-16 text-white mt-10">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-5xl font-bold text-center mb-4">What We Do</h2>
        <p className="text-center text-lg text-[#D1D1D1] mb-12">
          We offer end-to-end digital solutions to help founders and businesses
          launch, grow, <br />
          and scale their digital presence.
        </p>

        {/* First Row: 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Second Row: 2 items with wider width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index + 3} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
