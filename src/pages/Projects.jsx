import ProjectCard from "../components/ProjectCard";
import { FaUsers, FaUserTie, FaQuestionCircle, FaMapMarkedAlt, FaCertificate, FaCalendarAlt, FaListAlt, FaIndustry, FaBuilding, FaTools, FaDraftingCompass, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "Project Alpha",
    description: "A web application for managing tasks efficiently with modern UI.",
    images: [
      "/images/project1-1.jpg",
      "/images/project1-2.jpg",
      "/images/project1-3.jpg"
    ]
  },
  {
    name: "Project Beta",
    description: "Mobile app for tracking fitness and daily activities.",
    images: [
      "/images/project2-1.jpg",
      "/images/project2-2.jpg"
    ]
  },
];

const workingProcessSteps = [
  { text: "Dedicated team for the Project", icon: <FaUsers /> },
  { text: "Appointment of Consultants", icon: <FaUserTie /> },
  { text: "Client Query List", icon: <FaQuestionCircle /> },
  { text: "Site Analysis & Feasibility Study", icon: <FaMapMarkedAlt /> },
  { text: "Area Certification", icon: <FaCertificate /> },
  { text: "Project schedule", icon: <FaCalendarAlt /> },
  { text: "BOQ, Execution Strategy adhering to Cost, Quality and Timeline, Material List", icon: <FaListAlt /> },
  { text: "Approved list of Manufacturer & Supplier", icon: <FaIndustry /> },
  { text: "Approved list of Manufacturer & Supplier", icon: <FaBuilding /> },
  { text: "Approved list of Manufacturer & Supplier", icon: <FaTools /> },
  { text: "As Built drawings", icon: <FaDraftingCompass /> },
  { text: "Architect’s Completion Certificate", icon: <FaCheckCircle /> },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-start p-4 py-16"
      style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%)",
        boxShadow: "inset 0 0 50px rgba(0,0,0,0.05), 0 20px 60px rgba(99,102,241,0.2)"
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
        Projects Section
      </h1>

      {/* Grid Project Steps */}
      <div className="w-full max-w-7xl mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center text-gray-700">
          PROJECT WORKING PROCESS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {workingProcessSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Step Circle */}
              <div className="bg-white/90 backdrop-blur-md border-4 border-indigo-500 text-indigo-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl shadow-lg">
                {step.icon}
              </div>

              {/* Step Number */}
              <div className="mt-2 font-bold text-center text-lg text-gray-800">
                Step {idx + 1}
              </div>

              {/* Step Description */}
              <p className="mt-1 text-center text-gray-700 text-sm sm:text-base">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Projects Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-700">
        Our Projects
      </h2>

      {/* Project Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
