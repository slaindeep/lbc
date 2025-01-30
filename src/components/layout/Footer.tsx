import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Icon } from "@iconify/react";
import tiktokIcon from "@iconify/icons-simple-icons/tiktok";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#5D4A82] to-[#856BAE] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <Link to="/" className="block">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={logo}
                  alt="LBG Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-bold">LBC</span>
              </div>
            </Link>
            <p className="text-sm text-white/80">
              Corporate service provider specializing in Human Resources, Audit,
              Data Analytics, and Business Administrative services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white/80 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white/80 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white/80 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/get-started"
                  className="hover:text-white/80 transition-colors"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-white/80 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white/80 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/trademark-policy"
                  className="hover:text-white/80 transition-colors"
                >
                  Trademark Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance-statement"
                  className="hover:text-white/80 transition-colors"
                >
                  Compliance Statement
                </Link>
              </li>
              <li>
                <Link
                  to="/fraud-alert"
                  className="hover:text-white/80 transition-colors"
                >
                  Fraud Alert
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="mailto:info@lumi-blue.com"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@lumi-blue.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+971562886878"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +971 562886878
                </a>
              </li>
              <li className="pt-2">
                First Floor, Office No 110, Golf Park Building
                <br />
                Al Garhoud
                <br />
                United Arab Emirates 85662 AE
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/luminous-bluewaters-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Luminous_blue_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Luminous-Bluewaters-Consulting/61569878676612/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/luminous_bluewaters_consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@luminous.blue"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Icon icon={tiktokIcon} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/90">
            © {currentYear} Luminous Bluewaters Consultancy. All rights reserved. 
            <Link to="/terms-and-conditions" className="hover:text-white/80 transition-colors ml-2">Terms & Conditions</Link>
            <span className="mx-2">|</span>
            <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/trademark-policy" className="hover:text-white/80 transition-colors">Trademark Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/compliance-statement" className="hover:text-white/80 transition-colors">Compliance Statement</Link>
            <span className="mx-2">|</span>
            <Link to="/fraud-alert" className="hover:text-white/80 transition-colors">Fraud Alert</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;