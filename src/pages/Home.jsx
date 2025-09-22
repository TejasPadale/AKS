// src/pages/Home.jsx
import { Link } from "react-scroll";
import constructionBg from "../assets/struction-bg.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${constructionBg})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Building Dreams, Shaping Futures
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
          We are a trusted construction company delivering quality projects with
          innovation, safety, and sustainability.
        </p>

        {/* Scroll Button */}
        <Link
          to="about"
          smooth="easeInOutQuad"
          duration={800}
          offset={-70}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md cursor-pointer transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
