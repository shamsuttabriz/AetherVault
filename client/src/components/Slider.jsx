import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaMonument,
  FaPagelines,
  FaGlobeAsia,
} from "react-icons/fa";

const slides = [
  {
    title: "Discover Ancient Wonders",
    desc: "Explore history through rare artifacts and time-forgotten treasures.",
    image: "https://i.ibb.co.com/nNQbYjMF/art2.jpg",
  },
  {
    title: "Unlock the Secrets of the Past",
    desc: "Dive deep into mysterious inventions and legendary civilizations.",
    image: "https://i.ibb.co.com/TMcJbP1K/a2.jpg",
  },
  {
    title: "History Comes Alive Here",
    desc: "Experience the power of preserved moments and culture.",
    image: "https://i.ibb.co.com/9mYgCh0W/a1.jpg",
  },
];

const artifactLinks = [
  {
    id: 1,
    icon: <FaMonument />,
    name: "Egypt",
    url: "https://en.wikipedia.org/wiki/Ancient_Egypt",
  },
  {
    id: 2,
    icon: <FaLandmark />,
    name: "Greece",
    url: "https://en.wikipedia.org/wiki/Ancient_Greece",
  },
  {
    id: 3,
    icon: <FaMonument />,
    name: "Rome",
    url: "https://en.wikipedia.org/wiki/Ancient_Rome",
  },
  {
    id: 4,
    icon: <FaPagelines />,
    name: "China",
    url: "https://en.wikipedia.org/wiki/Ancient_China",
  },
  {
    id: 5,
    icon: <FaGlobeAsia />,
    name: "Asia",
    url: "https://en.wikipedia.org/wiki/Asian_art",
  },
];

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="w-full h-[65vh] md:h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Center Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-center bg-green-950/15 text-white p-10 rounded-xl max-w-3xl"
              >
                <h2 className="text-3xl md:text-6xl font-extrabold mb-4 text-[#FFCB61] drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl mb-8 text-gray-100">
                  {slide.desc}
                </p>

                {/* Artifact Place Icons */}
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                  {artifactLinks.map((item) => (
                    <motion.a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center text-[#FFCB61] hover:text-yellow-400 transition"
                    >
                      <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full border border-[#FFCB61]/40 hover:bg-[#FFCB61]/20 transition">
                        {item.icon}
                      </div>
                      <span className="text-sm mt-1">{item.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
