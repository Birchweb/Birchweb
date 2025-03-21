
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Birchweb</h3>
            <p className="text-gray-300 max-w-sm">
              Professionele websites op maat voor ondernemers, zonder poespas en tegen scherpe prijzen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-white transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/over-mij" className="text-gray-300 hover:text-white transition-colors">
                  Over mij
                </Link>
              </li>
              <li>
                <Link to="/prijzen" className="text-gray-300 hover:text-white transition-colors">
                  Prijzen
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary-400" />
                <a href="mailto:info@birchweb.nl" className="text-gray-300 hover:text-white transition-colors">
                  info@birchweb.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary-400" />
                <a href="tel:+31612345678" className="text-gray-300 hover:text-white transition-colors">
                  +31 6 12345678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-400" />
                <span className="text-gray-300">
                  Amsterdam, Nederland
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Birchweb. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
