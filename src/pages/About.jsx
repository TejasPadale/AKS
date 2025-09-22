// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)",
      }}
    >
      {/* Subtle abstract pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          ABOUT US
        </motion.h1>

        {/* Cards */}
        <div className="grid gap-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-blueprint-real-estate-flatart-icons-outline-flatarticons.png"
              alt="Concepts"
              className="w-full md:w-1/3 object-cover p-6"
            />
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                Concepts, Design and Detailing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Design and creation of best ambience with space-planning,
                creation of various alternatives to help and assist the client
                to derive at the “best decision” suitable for a ‘healthy work
                environment’.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                Project Implementation Strategy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cost estimation and detail specifications considering economy
                and constraints in time schedule, detailed time chart for
                various work criteria to be completed at the particular Time
                (PERT charts) which assists the client to target completion in a
                systematic manner.
              </p>
            </div>
            <img
              src="https://img.icons8.com/ios/512/project.png"
              alt="Implementation"
              className="w-full md:w-1/3 object-cover p-6"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://img.icons8.com/fluency/512/technical-support.png"
              alt="Technical Services"
              className="w-full md:w-1/3 object-cover p-6"
            />
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                Technical Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Close proximity with technical consultants related to
                Electrical, HVAC, Plumbing, Systems Integration, Security
                Systems enables achieving enhanced technical solutions with the
                best of Economy & Efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
