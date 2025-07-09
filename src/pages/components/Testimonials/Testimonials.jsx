import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TestimonialCard from "../../ui/TestimonialCard";
import maleAvatar from "../../../assets/images/male.svg";
import femaleAvatar from "../../../assets/images/female.svg";
import logo1 from "../../../assets/images/logo1.svg";
import logo2 from "../../../assets/images/logo2.svg";

const testimonialData = [
  {
    text: "I was skeptical at first, but exceeded all my expectations. The robust analytics and reporting tools provided valuable insights into our business performance.",
    name: "Scott William",
    title: "CEO & Founder",
    image: maleAvatar,
    logo: logo1,
  },
  {
    text: "I was skeptical at first, but exceeded all my expectations. The robust analytics and reporting tools provided valuable insights into our business performance.",
    name: "Lydia Pearl",
    title: "Head of Design",
    image: femaleAvatar,
    logo: logo2,
  },
  {
    text: "I was skeptical at first, but exceeded all my expectations. The robust analytics and reporting tools provided valuable insights into our business performance.",
    name: "John Miles",
    title: "Head of Sales, Patkat",
    image: maleAvatar,
    logo: logo1,
  },
  {
    text: "I was skeptical at first, but exceeded all my expectations. The robust analytics and reporting tools provided valuable insights into our business performance.",
    name: "Scott William",
    title: "CEO & Founder",
    image: femaleAvatar,
    logo: logo2,
  },
  {
    text: "I was skeptical at first, but exceeded all my expectations. The robust analytics and reporting tools provided valuable insights into our business performance.",
    name: "Lydia Pearl",
    title: "Head of Design",
    image: maleAvatar,
    logo: logo1,
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        What Our{" "}
        <span className="bg-gradient-to-b from-[#966C9E] to-[#F3B880] bg-clip-text text-transparent">
          Clients Say
        </span>
      </h2>

      <div className="overflow-hidden ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index} className="py-4">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
