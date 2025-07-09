const Navbar = () => {
  return (
    <div className="py-4 border-b border-white/10 bg-gradient-to-r from-[#6a4c7a] via-[#000000] to-[#000000]">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h3 className="text-white text-xl font-semibold">Launch Layer</h3>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-sm text-white">
          <li className="font-semibold">Home</li>
          <li className="hover:font-semibold">Services</li>
          <li className="hover:font-semibold">Projects</li>
          <li className="hover:font-semibold">About Us</li>
          <li className="hover:font-semibold">Testimonial</li>
        </ul>

        {/* Contact Button */}
        <button className="bg-gradient-to-r from-[#c287b8] to-[#a970a3] text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
