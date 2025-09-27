// src/pages/ContactUs.jsx
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section
      id="contactus"
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 overflow-hidden"
    >
      {/* Darker solid/gradient industrial background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gray-800"></div>
      </div>

      {/* Section title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-white"
      >
        Contact Us
      </motion.h1>

      <div className="max-w-5xl w-full space-y-12 text-center">
        {/* Name & Title card */}
        <div className="bg-gray-950/90 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-orange-500">
            AKS Construction
          </h2>
          <p className="text-2xl md:text-2xl font-bold mb-2 text-teal-500">
            Abhay Kishor Salunkhe
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Reg. Engineers and Contractor
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-3 bg-gray-950/80 rounded-xl p-6 shadow-xl transition-transform duration-300"
          >
            <FaHome className="contact-icon text-orange-500 text-4xl" />
            <p className="text-gray-200 text-center text-sm md:text-base leading-relaxed">
              A/P Bhade, Tal-Khandala, <br />
              Dist-Satara 412801, <br />
              Maharashtra, India
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-3 bg-gray-950/80 rounded-xl p-6 shadow-xl transition-transform duration-300"
          >
            <FaPhone className="contact-icon text-orange-500 text-4xl transform -scale-x-100" />
            <a
              href="tel:+919172371817"
              className="text-orange-400 font-semibold hover:text-white transition-colors text-base md:text-lg"
            >
              +91 9172371817
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-3 bg-gray-950/80 rounded-xl p-6 shadow-xl transition-transform duration-300"
          >
            <FaEnvelope className="contact-icon text-orange-500 text-4xl" />
            <a
              href="mailto:abhisal8833@gmail.com"
              className="text-orange-400 font-semibold hover:text-white transition-colors text-base md:text-lg"
            >
              abhisal8833@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* Tailwind CSS animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(255,165,0,0.3)); }
          50% { transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(255,165,0,0.6)); }
        }
        .contact-icon {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
