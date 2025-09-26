import { useState, useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectCard({ project }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Separate refs for main & fullscreen sliders
  const thumbnailSliderRef = useRef(null);
  const fullscreenSliderRef = useRef(null);

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
    lazyLoad: "ondemand",
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
      {/* Project Name */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
        {project.name}
      </h2>

      {/* Location */}
      {project.location && (
        <p className="flex items-center text-gray-600 mb-3 text-sm sm:text-base justify-center sm:justify-start">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          {project.location}
        </p>
      )}

      {/* Thumbnail carousel */}
      <div className="relative">
        <Slider
          {...settings}
          ref={thumbnailSliderRef}
          className="
            [&_.slick-dots]:!absolute
            [&_.slick-dots]:!bottom-2
            [&_.slick-dots]:!left-1/2
            [&_.slick-dots]:!-translate-x-1/2
            [&_.slick-dots_li_button:before]:!text-xs
            [&_.slick-dots_li_button:before]:!text-white
            [&_.slick-dots_li_button:before]:!opacity-70
            [&_.slick-dots_li.slick-active_button:before]:!text-red-400
            [&_.slick-dots_li.slick-active_button:before]:!opacity-100
          "
        >
          {project.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`${project.name} - slide ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover cursor-pointer rounded-md transition duration-300 ease-in-out hover:opacity-90"
                loading="lazy"
                onClick={() => setIsFullscreen(true)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
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
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2 text-center">
              {project.name}
            </h2>

            {/* Location */}
            {project.location && (
              <p className="flex items-center text-gray-300 mb-4 text-center">
                <FaMapMarkerAlt className="mr-2 text-red-400" />
                {project.location}
              </p>
            )}

            {/* Description */}
            {project.description && (
              <p className="text-white text-center mb-4 max-w-xl sm:max-w-2xl">
                {project.description}
              </p>
            )}

            {/* Fullscreen Carousel */}
            <div className="relative w-full max-w-3xl sm:max-w-4xl">
              <Slider
                {...settings}
                ref={fullscreenSliderRef}
                className="
                  [&_.slick-dots]:!absolute
                  [&_.slick-dots]:!bottom-4
                  [&_.slick-dots]:!left-1/2
                  [&_.slick-dots]:!-translate-x-1/2
                  [&_.slick-dots_li_button:before]:!text-sm
                  [&_.slick-dots_li_button:before]:!text-white
                  [&_.slick-dots_li_button:before]:!opacity-70
                  [&_.slick-dots_li.slick-active_button:before]:!text-red-400
                  [&_.slick-dots_li.slick-active_button:before]:!opacity-100
                "
              >
                {project.images.map((img, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${project.name} - fullscreen ${index + 1}`}
                      className="w-full max-h-[70vh] sm:max-h-[75vh] object-contain mx-auto rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>

              {/* Custom Arrows */}
              <button
                className="absolute top-1/2 left-2 text-white text-2xl sm:text-3xl -translate-y-1/2 z-50 bg-black/40 p-2 rounded-full hover:bg-black/70"
                onClick={() => fullscreenSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-2 text-white text-2xl sm:text-3xl -translate-y-1/2 z-50 bg-black/40 p-2 rounded-full hover:bg-black/70"
                onClick={() => fullscreenSliderRef.current.slickNext()}
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
