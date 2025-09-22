import { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectCard({ project }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
        {project.name}
      </h2>

      {/* Thumbnail carousel */}
      <Slider {...settings} ref={setSliderRef}>
        {project.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={project.name}
              className="w-full h-48 sm:h-64 object-cover cursor-pointer rounded-md"
              onClick={() => setIsFullscreen(true)}
            />
          </div>
        ))}
      </Slider>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={() => setIsFullscreen(false)}
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4 text-center">
              {project.name}
            </h2>

            {/* Description */}
            {project.description && (
              <p className="text-white text-center mb-4 max-w-xl sm:max-w-2xl">
                {project.description}
              </p>
            )}

            {/* Fullscreen Carousel */}
            <div className="relative w-full max-w-3xl sm:max-w-4xl">
              <Slider {...settings} ref={setSliderRef}>
                {project.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={project.name}
                      className="w-full h-[60vh] sm:h-[80vh] object-contain mx-auto"
                    />
                  </div>
                ))}
              </Slider>

              {/* Custom Arrows */}
              <button
                className="absolute top-1/2 left-2 text-white text-2xl sm:text-3xl -translate-y-1/2 z-50"
                onClick={() => sliderRef.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-2 text-white text-2xl sm:text-3xl -translate-y-1/2 z-50"
                onClick={() => sliderRef.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
