// src/App.jsx

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Projects from "./pages/Projects";
import Services from "./pages/Services";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Clients />
      <OurTeam />
      <ContactUs />
    </div>
  );
}

export default App;
