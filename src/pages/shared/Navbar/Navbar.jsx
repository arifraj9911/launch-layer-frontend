const Navbar = () => {
  return (
    <div className="py-4 border-b border-white/10 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h3 className="text-white text-[32px] font-semibold">Launch Layer</h3>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg text-[#D1D1D1]">
          <li className="font-semibold">Home</li>
          <li className="hover:font-semibold">Services</li>
          <li className="hover:font-semibold">Projects</li>
          <li className="hover:font-semibold">About Us</li>
          <li className="hover:font-semibold">Testimonial</li>
        </ul>

        {/* Contact Button */}
         <button
              style={{
                background:
                  "linear-gradient(183deg, #966C9E 50%, #F3B880 129.63%)",
              }}
              className=" text-white px-4 py-2 rounded-lg text-xl font-medium "
            >
              Contact Us
            </button>
      </div>
    </div>
  );
};

export default Navbar;
