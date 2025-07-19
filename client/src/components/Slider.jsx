import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    title: "Discover Ancient Wonders",
    desc: "Explore history through rare artifacts and time-forgotten treasures.",
    image: "https://i.ibb.co/zT8GKvy8/Bid2-min.png",
    logo: "https://i.ibb.co/0wKFqDQ/Artifacts-World-Logo.png",
    button: "Explore Now",
  },
  {
    title: "Unlock the Secrets of the Past",
    desc: "Dive deep into mysterious inventions and legendary civilizations.",
    image: "https://i.ibb.co/7dV5Zn9C/Banner-min.jpg",
    logo: "https://i.ibb.co/DfhJ0v15/artifact-removebg-preview-1.png",
    button: "Start Your Journey",
  },
  {
    title: "History Comes Alive Here",
    desc: "Experience the power of preserved moments and culture.",
    image: "https://i.ibb.co/jkfHVwKm/5.jpg",
    logo: "https://i.ibb.co/0wKFqDQ/Artifacts-World-Logo.png",
    button: "Learn More",
  },
];

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[100vh] md:h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 p-10"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-8 rounded-xl text-[#FFCB61] max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg mb-6">{slide.desc}</p>
                <button className="bg-[#FFCB61] hover:bg-yellow-500 transition px-6 py-2 rounded-full text-black font-semibold cursor-pointer">
                  {slide.button}
                </button>
              </div>
              <div className="">
                <img className="md:max-w-xl" src={slide.logo} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
