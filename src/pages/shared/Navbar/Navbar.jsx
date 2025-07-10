import { AlignRight } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { useState } from "react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="py-4 border-b border-white/10  px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <h3 className="text-white text-[22px] md:text-[32px] font-semibold">
            Launch Layer
          </h3>
          <AlignRight onClick={toggleDrawer} className="md:hidden " size={28} />
        </div>

        {/* Navigation Links */}
        <ul className="md:flex gap-8 text-lg hidden text-[#D1D1D1]">
          <li className="font-semibold">Home</li>
          <li className="hover:font-semibold">Services</li>
          <li className="hover:font-semibold">Projects</li>
          <li className="hover:font-semibold">About Us</li>
          <li className="hover:font-semibold">Testimonial</li>
        </ul>

        {/* Contact Button */}
        <button
          style={{
            background: "linear-gradient(183deg, #966C9E 50%, #F3B880 129.63%)",
          }}
          className=" text-white px-4 py-2 rounded-lg text-xl font-medium md:block hidden"
        >
          Contact Us
        </button>
      </div>

      {/* for mobile navigation drawer */}
      <MobileNavigation isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default Navbar;
