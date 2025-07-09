import SharedLinearBg from "../../ui/sharedLinearBg";
import bannerSide from "../../../assets/images/banner_side.svg";

const Banner = () => {
  return (
    <div className="relative mt-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 px-8 md:px-20 grid grid-cols-3 items-center pb-32">
        <div className="text-white col-span-2">
          <h1 className="text-4xl md:text-[56px] font-bold leading-snug">
            We Don't Just Build Websites <br />
            We Build <span className="text-[#966C9E]">Launchpads 🚀</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Transform your ideas into powerful digital products. From MVP
            development to full-scale launches, we're the founding team that
            gets startups off the ground.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-gradient-to-r from-[#eaa6bd] to-[#c287b8] text-white px-5 py-2 rounded-md">
              Lets Talk
            </button>
            <button className="border border-gray-400 text-white px-5 py-2 rounded-md">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img src={bannerSide} alt="Rocket Banner" className="w-full max-w-md" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <SharedLinearBg />
    </div>
  );
};

export default Banner;
