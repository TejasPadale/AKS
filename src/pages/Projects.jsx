import { useState, useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
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

import {
  baseGroutingWork,
  chamberConstructionWork,
  constructionofBridge,
  constructionOfLabourLawkrRoom,
  constructionOfPrecastCompoundWall,
  constructionOfSDBTank,
  CSRWorkGodrejLwakim,
  fallCielingWork,
  foundationExtensionWork,
  humePipeImages,
  officeBuildingBachelorsBoard,
  PCCWork,
  poleFixingWork,
  radiographyPitRoomWork,
  RCCRetainingWallWork,
  roadConstructionWork,
  roadConstructionWorkISHIDA,
  sewageStormWaterDrainageWork,
  thermoplasticParkingMarkingWork,
  weighbridgeFoundationWork,
} from "../assets/projectImages";

// ✅ Projects Data
const projectsData = [
  {
    name: "CSR Work Godrej Lwakim",
    location: "Karnavdi",
    description: "Construction of Toilet and Urinals.",
    images: CSRWorkGodrejLwakim,
  },
  {
    name: "Construction of Bridge",
    location: "Bhade",
    description: "Construction of Bridge at Bhade ( Zila Parishad Satara)",
    images: constructionofBridge,
  },
  {
    name: "Construction of Precast Compound Wall",
    location: "Mirje",
    description:
      "Construction of Precast Compound Wall at Mirje ( Kirti Devlopers).",
    images: constructionOfPrecastCompoundWall,
  },
  {
    name: "Construction of SDB Tank",
    location: "Godrej Lwakim Plant",
    description:
      "Construction of SDB Tank at Godrej Lwakim Plant ( Godrej Lwakim)",
    images: constructionOfSDBTank,
  },
  {
    name: "Construction of Labour Lawkr Room",
    location: "Godrej Lwakim Plant",
    description:
      "Construction of Labour Lawkr Room at Godrej Lwakim Plant ( Godrej Lwakim)",
    images: constructionOfLabourLawkrRoom,
  },
  {
    name: "Hume Pipe Laying",
    location: "OYC India, Kesurdi",
    description:
      "Worked as Sub Contractor under the Sahyadri Enterprises, Underground Hume Pipe Laying for the Electrical Cables.",
    images: humePipeImages,
  },
  {
    name: "Base Grouting Work",
    location: "OYC India, Kesurdi",
    description:
      "Base grouting of pumps, vessels, motors in Conbextra GP2 material with proficiency and quality.",
    images: baseGroutingWork,
  },
  {
    name: "Radiography Pit Room Work",
    location: "OYC India, Kesurdi",
    description: "Construction of Pit Room for Storage of radiography camera.",
    images: radiographyPitRoomWork,
  },
  {
    name: "Thermoplastic Parking Marking Work",
    location: "Vision One, Wakad",
    description: "Thermoplastic paint marking for parking areas.",
    images: thermoplasticParkingMarkingWork,
  },
  {
    name: "Road Construction Work",
    location: "Godrej Interio, Shindewadi",
    description: "Construction of road with included material and manpower.",
    images: roadConstructionWork,
  },
  {
    name: "Weighbridge Foundation Work",
    location: "Ajay Industries Pvt. Ltd, Wing",
    description:
      "Weighbridge Foundation for 40 tonne Weighbridge in a factory.",
    images: weighbridgeFoundationWork,
  },
  {
    name: "Pole Fixing Work",
    location: "Datwyler, Kesurdi",
    description: "Fixing poles for fire fighting Cable Laying in New plant.",
    images: poleFixingWork,
  },
  {
    name: "Foundation Extension Work",
    location: "Datwyler, Kesurdi",
    description:
      "Foundation Extension for fire fighting Pump room in old plant.",
    images: foundationExtensionWork,
  },
  {
    name: "Chamber Construction Work",
    location: "Datwyler, Kesurdi",
    description: "Construction of Chambers for fire fighting valves.",
    images: chamberConstructionWork,
  },
  {
    name: "Road Construction Work",
    location: "ISHIDA, Kesurdi",
    description: "Construction of Road in ISHIDA with Tremix Treatment.",
    images: roadConstructionWorkISHIDA,
  },
  {
    name: "PCC Work",
    location: "Ajay Industries, Wing",
    description: "PCC For Fire Pump Room.",
    images: PCCWork,
  },
  {
    name: "Office Building, Bachelors Board",
    location: "Wilo Mather Platts & Pumps, Kesurdi",
    description: "G+1 Bachelor Boarding Building Construction.",
    images: officeBuildingBachelorsBoard,
  },
  {
    name: "Sewage & Storm Water Drainage Work",
    location: "Wilo Mather Platts & Pumps, Kesurdi",
    description: "Laying Hume pipes for Drainage with line & Level.",
    images: sewageStormWaterDrainageWork,
  },
  {
    name: "RCC Retaining Wall Work",
    location: "KSB Pumps, Kesurdi",
    description: "Construction Of RCC Retaining Wall.",
    images: RCCRetainingWallWork,
  },
  {
    name: "False Ceiling Work",
    location: "Kesurdi, Wing",
    description: "PVC Panels Installation in Conference Room.",
    images: fallCielingWork,
  },
];

// ✅ Working steps array
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
  const step = 6; // projects per click
  const [visibleCount, setVisibleCount] = useState(step);
  const projectsRef = useRef(null);

  const handleToggle = () => {
    if (visibleCount >= projectsData.length) {
      setVisibleCount(step); // Show Less
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount((prev) => Math.min(prev + step, projectsData.length)); // Show More
    }
  };

  const isAllVisible = visibleCount >= projectsData.length;

  useEffect(() => {
    // Scroll to newly added projects on Show More
    if (!isAllVisible && visibleCount > step) {
      const lastProject = document.querySelector(
        `#project-${visibleCount - step}`
      );
      lastProject?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visibleCount]);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-start p-4 py-16"
      style={{
        background: "linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%)",
        boxShadow:
          "inset 0 0 50px rgba(0,0,0,0.05), 0 20px 60px rgba(99,102,241,0.2)",
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
        Projects Section
      </h1>

      {/* Working Process Steps */}
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

      {/* Projects */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-700">
        Our Projects
      </h2>
      <motion.div
        layout
        ref={projectsRef}
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {projectsData.slice(0, visibleCount).map((project, idx) => (
            <motion.div
              key={project.name}
              id={`project-${idx}`}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Toggle Button */}
      <div className="mt-8 flex justify-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleToggle}
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white font-semibold rounded-xl shadow-xl 
               hover:shadow-2xl hover:brightness-105 transition-all duration-300
               focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          {isAllVisible ? "Show Less" : "Show More"}
        </motion.button>
      </div>
    </section>
  );
}
