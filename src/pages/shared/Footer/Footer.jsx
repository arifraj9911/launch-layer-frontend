const Footer = () => {
  return (
    <footer style={{
        background:'linear-gradient(103deg, #010101 4.72%, #3C2141 48.63%, #010101 92.2%)'
    }} className="py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top menu and social icons */}
        <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-between items-center text-xs md:text-base mb-4 px-4 md:px-0">
          {/* Navigation */}
          <nav className="flex space-x-6 mb-4 md:mb-0 ">
            {["Home", "About Us", "Services", "Contact Us", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#7997E1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#7997E1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#7997E1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29.59 29.59 0 0 0 1 12a29.59 29.59 0 0 0 .47 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29.59 29.59 0 0 0 23 12a29.59 29.59 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#7997E1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.6a9 9 0 0 1-2.88 1.1 4.48 4.48 0 0 0-7.63 4.09A12.8 12.8 0 0 1 1.64 2.16a4.48 4.48 0 0 0 1.39 6 4.49 4.49 0 0 1-2.03-.56v.06a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2.02.08 4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 1 19.54 12.79 12.79 0 0 0 7 21c8.3 0 12.85-6.9 12.85-12.85 0-.2 0-.42-.02-.63A9.18 9.18 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="border-gray-500 my-8 md:my-12" />

        {/* Bottom area */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base ">
          <p className="font-normal text-xs md:text-base hidden md:block">© 2024 Copyright, All right Reserved</p>

          <h1 className="text-4xl md:text-[56px] font-bold text-white my-2 md:my-0">
            Launch Layer
          </h1>

          <div className="flex space-x-4 font-normal mt-4 md:mt-0">
            <a
              href="#"
              className="underline hover:text-white"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <div className="border-r"></div>
            <a
              href="#"
              className="underline hover:text-white"
              aria-label="Terms and Conditions"
            >
              Terms &amp; Condition
            </a>
          </div>
          <p className="font-normal text-xs md:text-base block md:hidden mt-6">© 2024 Copyright, All right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
