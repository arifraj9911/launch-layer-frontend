const TestimonialCard = ({ text, name, title, image, logo }) => {
  return (
    <div className="bg-[#19101B] rounded-lg p-6 text-white h-full flex flex-col justify-between">
      <div>
        <div className="flex gap-1 text-yellow-400 mb-4">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <span className="text-2xl" key={idx}>★</span>
            ))}
        </div>
        <p className="text-base md:text-2xl md:leading-[170%] italic font-normal mb-6">“{text}”</p>
      </div>

      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-lg text-gray-400">{title}</p>
          </div>
        </div>
        <img src={logo} alt="Company logo" className="w-52 h-auto" />
      </div>
    </div>
  );
};

export default TestimonialCard;
