// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";

import Logo from "../assets/logo.PNG";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "clients", label: "Clients" },
    { to: "ourteam", label: "Our Team" },
    { to: "contactus", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 10; // minimum scroll to detect

      // background blur after 50px
      setScrolled(currentScrollY > 50);

      // hide on scroll down, show on scroll up
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false); // scrolling down
        } else {
          setVisible(true); // scrolling up
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-white/50 backdrop-blur-md shadow-md" : "bg-transparent"}
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div
          className="cursor-pointer"
          onClick={() =>
            scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuad" })
          }
        >
          <img src={Logo} alt="Logo" className="h-10 w-10" />
        </div>

        {/* Middle: Company Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-2xl font-bold whitespace-nowrap text-orange-500">
            AKS Construction
          </span>
        </div>

        {/* Right: Desktop Links */}
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

        {/* Right: Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with fade+slide */}
      <div
        className={`md:hidden bg-gray-700 transition-all duration-500 overflow-hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
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
    </nav>
  );
}
