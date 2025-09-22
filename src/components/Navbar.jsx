// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";

import Logo from "../assets/react.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "ourteam", label: "Our Team" },
    { to: "clients", label: "Clients" },
    { to: "contactus", label: "Contact Us" },
  ];

  // Listen for scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo + Company */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() =>
            scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuad" })
          }
        >
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">ABHAY KISHOR SALUNKHE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth="easeInOutQuad"
              duration={800}
              spy={true}
              offset={-70}
              activeClass="text-blue-600 font-bold border-b-2 border-blue-600"
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth="easeInOutQuad"
                  duration={800}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-600 font-bold border-b-2 border-blue-600"
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
