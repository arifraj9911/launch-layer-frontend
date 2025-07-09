import Marquee from "react-fast-marquee";
import rarestone from "../../../assets/images/rarestone.svg";
import seatlab from "../../../assets/images/seatlab.svg";
import compass from "../../../assets/images/compass.svg";
import solana from "../../../assets/images/solana.svg";
import myenergi from "../../../assets/images/myenerg.svg";

const founderImages = [
  rarestone,
  seatlab,
  compass,
  solana,
  rarestone,
  myenergi,
  solana,
  seatlab,
  compass,
  solana,
  rarestone,
  myenergi,
  solana,
];

const Founders = () => {
  return (
    <div
      className="py-10"
      style={{
        background: "linear-gradient(180deg, #1E1A25 -13.98%, #71628B 129.42%)",
      }}
    >
      <h3 className="text-center text-white font-semibold mb-6 text-base md:text-xl">
        Trusted by 50+ Founders
      </h3>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="space-x-16"
      >
        {founderImages.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`founder logo ${index}`}
            className="h-10 mx-8 opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Founders;
