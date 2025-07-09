const ProjectCard = ({ image, type, title, description, tech }) => {
  return (
    <div
      className="p-[2px] rounded-2xl"
      style={{
        background:
          "linear-gradient(247deg, #966C9E -8.6%, rgba(243, 184, 128, 0.11) 79.51%)",
      }}
    >
      <div className="bg-[#19101B] rounded-[14px] overflow-hidden shadow-sm transition duration-300 p-6">
        <img
          src={image}
          alt={title}
          className="w-full h-[413px] object-cover rounded-xl"
        />

        <div>
          <span className="text-xs font-normal text-[#D1D1D1] bg-[#605173] mt-5 mb-4 py-2 px-3 rounded-md inline-block">
            {type}
          </span>
          <h3 className="text-[32px] font-semibold text-white mb-1">{title}</h3>
          <p className="text-lg text-[#D1D1D1] font-normal mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="border-[#966C9E] border text-lg text-white px-3 py-2 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
