import bgw01 from "../assets/Projects/Base Grouting Work/01.PNG";
import bgw02 from "../assets/Projects/Base Grouting Work/02.PNG";
import bgw03 from "../assets/Projects/Base Grouting Work/03.PNG";
import bgw04 from "../assets/Projects/Base Grouting Work/04.PNG";

import ProjectCard from "../components/ProjectCard";
import {
  FaUsers,
  FaUserTie,
  FaQuestionCircle,
  FaMapMarkedAlt,
  FaCertificate,
  FaCalendarAlt,
  FaListAlt,
  FaIndustry,
  FaBuilding,
  FaTools,
  FaDraftingCompass,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "Hume Pipe Laying",
    location: "OYC India, Kesurdi (Sahyadri Suppliers)",
    description:
      "Worked as Sub Contractor under the Sahyadri Enterprises, Underground Hume Pipe Laying for the Electrical Cables.",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
  },
  {
    name: "Base Grouting Work",
    location: "OYC India, Kesurdi (Toyo Engineering)",
    description:
      "Base grouting of pumps, vessels, motors in Conbextra GP2 material with proficiency and quality.",
    images: [bgw01, bgw02, bgw03, bgw04],
  },
  {
    name: "Radiography Pit Room Work",
    location: "OYC India, Kesurdi (Ador Welding)",
    description: "Construction of Pit Room for Storage of radiography camera.",
    images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
  },
  {
    name: "Thermoplastic Parking Marking Work",
    location: "Vision One, Wakad (Siddhivinayak Group)",
    description: "Thermoplastic paint marking for parking areas.",
    images: ["/images/project4-1.jpg", "/images/project4-2.jpg"],
  },
  {
    name: "Road Construction Work",
    location: "Godrej Interio, Shindewadi",
    description: "Construction of road with included material and manpower.",
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
  },
  {
    name: "Weighbridge Foundation Work",
    location: "Ajay Industries Pvt. Ltd, Wing",
    description: "Weighbridge Foundation for 40 tonne Weighbridge in a factory.",
    images: ["/images/project6-1.jpg", "/images/project6-2.jpg"],
  },
  {
    name: "Pole Fixing Work",
    location: "Datwyler, Kesurdi (Canter Engineers)",
    description: "Fixing poles for fire fighting Cable Laying in New plant.",
    images: ["/images/project7-1.jpg", "/images/project7-2.jpg"],
  },
  {
    name: "Foundation Extension Work",
    location: "Datwyler, Kesurdi (Canter Engineers)",
    description:
      "Foundation Extension for fire fighting Pump room in old plant.",
    images: ["/images/project8-1.jpg", "/images/project8-2.jpg"],
  },
  {
    name: "Chamber Construction Work",
    location: "Datwyler, Kesurdi (Canter Engineers)",
    description: "Construction of Chambers for fire fighting valves.",
    images: ["/images/project9-1.jpg", "/images/project9-2.jpg"],
  },
  {
    name: "Road Construction Work",
    location: "ISHIDA, Kesurdi (Sahyadri Suppliers)",
    description: "Construction of Road in ISHIDA with Tremix Treatment.",
    images: ["/images/project10-1.jpg", "/images/project10-2.jpg"],
  },
  {
    name: "PCC Work",
    location: "Ajay Industries, Wing",
    description: "PCC For Fire Pump Room.",
    images: ["/images/project11-1.jpg", "/images/project11-2.jpg"],
  },
  {
    name: "Office Building, Bachelors Board",
    location: "Wilo Mather Platts & Pumps, Kesurdi",
    description: "G+1 Bachelor Boarding Building Construction.",
    images: ["/images/project12-1.jpg", "/images/project12-2.jpg"],
  },
  {
    name: "Sewage & Storm Water Drainage Work",
    location: "Wilo Mather Platts & Pumps, Kesurdi",
    description: "Laying Hume pipes for Drainage with line & Level.",
    images: ["/images/project13-1.jpg", "/images/project13-2.jpg"],
  },
  {
    name: "RCC Retaining Wall Work",
    location: "KSB Pumps, Kesurdi",
    description: "Construction Of RCC Retaining Wall.",
    images: ["/images/project14-1.jpg", "/images/project14-2.jpg"],
  },
  {
    name: "False Ceiling Work",
    location: "Kesurdi, Wing",
    description: "PVC Panels Installation in Conference Room.",
    images: ["/images/project15-1.jpg", "/images/project15-2.jpg"],
  },
];

const workingProcessSteps = [
  { text: "Dedicated team for the Project", icon: <FaUsers /> },
  { text: "Appointment of Consultants", icon: <FaUserTie /> },
  { text: "Client Query List", icon: <FaQuestionCircle /> },
  { text: "Site Analysis & Feasibility Study", icon: <FaMapMarkedAlt /> },
  { text: "Area Certification", icon: <FaCertificate /> },
  { text: "Project Schedule", icon: <FaCalendarAlt /> },
  {
    text: "BOQ, Execution Strategy adhering to Cost, Quality and Timeline",
    icon: <FaListAlt />,
  },
  { text: "Approved Manufacturer & Supplier List", icon: <FaIndustry /> },
  { text: "Civil & Structural Works", icon: <FaBuilding /> },
  { text: "Mechanical & Electrical Works", icon: <FaTools /> },
  { text: "As Built Drawings", icon: <FaDraftingCompass /> },
  { text: "Architect’s Completion Certificate", icon: <FaCheckCircle /> },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-start p-4 py-16"
      style={{
        background:
          "linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%)",
        boxShadow:
          "inset 0 0 50px rgba(0,0,0,0.05), 0 20px 60px rgba(99,102,241,0.2)",
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
              <div className="bg-white/90 backdrop-blur-md border-4 border-indigo-500 text-indigo-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl shadow-lg">
                {step.icon}
              </div>

              <div className="mt-2 font-bold text-center text-lg text-gray-800">
                Step {idx + 1}
              </div>

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
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
