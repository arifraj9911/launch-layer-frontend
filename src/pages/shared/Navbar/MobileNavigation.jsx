// components/MobileNavigation.jsx
import { X } from "lucide-react";

const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed  z-40  transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#030B1C] p-6 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end mb-4">
          <X size={24} className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 text-base text-[#D1D1D1]">
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
          className="text-white w-3/4 mt-4 py-2 rounded-lg text-base font-medium"
        >
          Contact Us
        </button>
      </div>
    </>
  );
};

export default MobileNavigation;
