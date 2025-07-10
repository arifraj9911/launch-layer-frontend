const TurningIdea = () => {
  return (
    <div className="flex justify-center items-center px-4 py-12 md:py-24">
      <div className="relative z-10 max-w-4xl w-full p-[1.5px] rounded-[32px] bg-gradient-to-b from-[#3063D3] to-black shadow-xl">
        <div className="relative rounded-[30px] bg-[#030B1C] p-8 md:p-16 text-center text-white overflow-hidden">
          {/*  Blur Effect */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] blur-[70px] z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(358deg, rgba(55, 34, 59, 0.2) 1.98%, #76527D 121.35%)",
              borderRadius: "50%",
            }}
          ></div>

          {/* Content */}
          <h2 className="text-3xl md:text-[56px] font-semibold mb-3 leading-tight md:leading-snug relative z-10">
            Let’s Turn Your <br />
            <span className="bg-gradient-to-b from-[#966C9E] to-[#F3B880] bg-clip-text text-transparent">
              Idea Into Reality
            </span>
          </h2>

          <p className="text-base md:text-lg font-normal max-w-lg mx-auto mb-6 text-white/70 relative z-10">
            From concept to launch, we help you build, validate, and scale your
            vision with speed and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button
              className="text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-base  md:text-xl font-medium"
              style={{
                background:
                  "linear-gradient(183deg, #966C9E 50%, #F3B880 129.63%)",
              }}
            >
              Learn More
            </button>
            <button className="text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-xl font-medium border border-white/80">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurningIdea;
