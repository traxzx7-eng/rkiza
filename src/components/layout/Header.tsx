"use client";

import { useState, useEffect } from "react";
import { content } from "@/lib/content";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-navy-900/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <a href="#" className={`text-2xl font-bold font-tajawal ${isScrolled ? "text-white" : "text-navy-900 lg:text-white"}`}>
            {content.header.logo.split(" - ")[0]}
          </a>
          <span className={`text-xs ${isScrolled ? "text-slate-300" : "text-slate-600 lg:text-slate-300"}`}>
            {content.header.subtitle.split(" — ")[0]}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {content.header.menu.map((item, idx) => (
            <a key={idx} href={item.href} className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? "text-slate-200" : "text-slate-200"}`}>
              {item.label}
            </a>
          ))}
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105">
            {content.header.careersBtn}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className={`lg:hidden ${isScrolled ? "text-white" : "text-navy-900"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy-900 shadow-xl border-t border-slate-800">
          <nav className="flex flex-col p-6 gap-4">
            {content.header.menu.map((item, idx) => (
              <a key={idx} href={item.href} className="text-white text-lg font-tajawal hover:text-gold-500" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <button className="bg-gold-500 text-white px-6 py-3 rounded-md text-center mt-4 font-bold" onClick={() => setMobileMenuOpen(false)}>
              {content.header.careersBtn}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
