const WhyChooseServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-start mb-6">
      {/* Icon box */}
      <div className="w-10 h-10 bg-[rgba(255,255,255,0.10)] rounded-lg flex items-center justify-center">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>

      {/* Text content */}
      <div className="flex-1">
        <h4 className="text-white text-xl md:text-2xl font-semibold mb-1">{title}</h4>
        <p style={{ color: "rgba(255, 255, 255, 0.7)" }} className=" text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseServiceCard;
