// src/pages/Services.jsx
import React from "react";
import { FaDraftingCompass, FaRegLightbulb, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Design & Build",
      items: [
        "Turnkey Solutions including MEP",
        "Interior Fit out",
        "Civil Projects",
        "Fabrication Projects",
      ],
      color: "from-orange-400 to-orange-500",
      icon: <FaDraftingCompass size={30} />,
    },
    {
      title: "Planning",
      items: [
        "Site Analysis",
        "Schematic Design",
        "Design Development",
        "Quantity and Estimation",
      ],
      color: "from-blue-400 to-blue-500",
      icon: <FaRegLightbulb size={30} />,
    },
    {
      title: "Execution",
      items: [
        "Finishes/Specification",
        "Quality Control",
        "Project Schedule",
        "Site Execution",
        "As Built Drawing",
      ],
      color: "from-green-400 to-green-500",
      icon: <FaTools size={30} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full animate-gradient bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-800 bg-[length:200%_200%] opacity-30"></div>
      </div>

      {/* Pattern overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
          Our Company Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`group rounded-2xl p-8 text-left bg-gradient-to-br ${service.color} text-white backdrop-blur-sm bg-opacity-60 shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-105 floating-card`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                {React.cloneElement(service.icon, {
                  className:
                    "transition-transform duration-500 group-hover:scale-110 transform",
                })}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-100">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 20s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
