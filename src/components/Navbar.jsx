import React from "react";
import { Home, LineChart, Gift, FileText, Quote, Image, Play } from "lucide-react";
import logo from "../assets/ecellLogo.svg"; 

export default function Navbar() {
  const navLinks = [
    { href: "/home", label: "Home", icon: <Home className="w-7 h-7" /> },
    { href: "/stats", label: "Stats", icon: <LineChart className="w-7 h-7" /> },
    { href: "/gift", label: "Gift", icon: <Gift className="w-7 h-7" /> },
    { href: "/docs", label: "Docs", icon: <FileText className="w-7 h-7" /> },
    { href: "/quotes", label: "Quotes", icon: <Quote className="w-7 h-7" /> },
    { href: "/gallery", label: "Gallery", icon: <Image className="w-7 h-7" /> },
    { href: "/videos", label: "Videos", icon: <Play className="w-7 h-7" /> },
  ];

  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-17 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          
          <a href="/" className="flex items-center space-x-2" aria-label="E-Cell Homepage">
            <img src={logo} alt="E-Cell Logo" className="h-14.8 w-14.8 rounded-full" />
          
          </a>

          {/* Icon Links */}
         
          <div className="flex items-center space-x-10 text-gray-700">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                title={link.label}
                aria-label={link.label}
                className="relative transform transition-transform duration-200 hover:scale-110 hover:text-black"
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/signup"
              className="rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transform transition duration-200 hover:scale-105 hover:shadow-lg"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
