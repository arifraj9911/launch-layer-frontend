const FeatureCard = ({ title, description, iconSrc, highlighted }) => {
  return (
    <div
      className={`rounded-xl p-[1px] transition duration-300 ${
        highlighted
          ? "bg-[#966C9E]"
          : ""
      }`}
      style={{
        background: highlighted
          ? undefined
          : "linear-gradient(247deg, #966C9E -8.6%, rgba(243, 184, 128, 0.11) 79.51%)",
      }}
    >
      <div
        className={`rounded-[10px] p-6 h-full ${
          highlighted ? "bg-[#966C9E]" : "bg-black"
        }`}
      >
        <div className="mb-[18px] w-14 h-14 bg-white rounded-full flex items-center justify-center">
          <img src={iconSrc} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
