import { useState } from 'react';
import logo from "../assets/ecellLogo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/Dates", label: "Dates" },
    { href: "/Prizes", label: "Prizes" },
    { href: "/Rules", label: "Rules" },
    { href: "/FAQ's", label: "FAQ's" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
    
      <div className="fixed top-0 left-0 right-0 h-20 bg-white/60 backdrop-blur-lg shadow-sm z-[-1]" />

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          <a href="/" className="flex items-center space-x-3" aria-label="E-Cell Homepage">
            <img src={logo} alt="E-Cell Logo" className="h-20 w-20 rounded-full" />
          </a>

          
          <div className="hidden md:flex items-center space-x-8 text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                className="hover-underline text-sm transition-transform duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

         
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/signup"
              className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:shadow-lg"
            >
              Register Now
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-sm border-t flex flex-col items-center space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/signup"
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white mt-2 hover:bg-gray-900"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  );
}
