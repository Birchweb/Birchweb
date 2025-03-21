
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Over mij", href: "/over-mij" },
  { name: "Werkwijze", href: "/werkwijze" },
  { name: "Prijzen", href: "/prijzen" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-display text-2xl font-bold text-primary-500">
              Birchweb
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="link-underline font-medium text-gray-800 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile navigation toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 top-[57px] z-50 transition-all duration-300 ease-in-out",
            // Added glassmorphism background for better readability
            "bg-white/80 backdrop-blur-lg",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col p-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
