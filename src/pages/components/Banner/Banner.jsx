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
            We Build {" "}
            <span className="bg-gradient-to-b from-[#966C9E] to-[#F3B880] bg-clip-text text-transparent">
              Launchpads 
            </span>
            🚀
          </h1>
          <p className="text-[#D1D1D1] mt-4">
            Transform your ideas into powerful digital products. From MVP
            development to full-scale launches, we're the founding team that
            gets startups off the ground.
          </p>
          <div className="mt-6 flex gap-6">
             <button
              style={{
                background:
                  "linear-gradient(164deg, #966C9E -6.9%, #F3B880 120.25%)",
              }}
              className=" text-white px-4 py-3 rounded-lg text-xl font-medium "
            >
              Lets Talk
            </button>
            <button
              
              className=" text-[#D1D1D1] px-4 py-3 rounded-lg text-xl font-medium border border-[rgba(255, 255, 255, 0.74)]"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={bannerSide}
            alt="Rocket Banner"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <SharedLinearBg />
    </div>
  );
};

export default Banner;
