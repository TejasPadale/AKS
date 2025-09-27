// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";

import Logo from "../assets/logo.PNG";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "clients", label: "Clients" },
    { to: "ourteam", label: "Our Team" },
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
              activeClass="active-link"
              className="relative cursor-pointer hover:text-blue-600 transition-colors inline-block
                         after:content-[''] after:block after:h-[2px] after:bg-blue-600 after:scale-x-0
                         after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
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
        <div className="md:hidden bg-gray-700 shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth="easeInOutQuad"
                  duration={800}
                  spy={true}
                  offset={-70}
                  activeClass="active-link"
                  onClick={() => setIsOpen(false)}
                  className="relative cursor-pointer hover:text-blue-600 transition-colors inline-block
                       after:content-[''] after:block after:h-[2px] after:bg-blue-600 after:scale-x-0
                       after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
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
