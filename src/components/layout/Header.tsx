import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaHandshake } from "react-icons/fa";
import Logo from "../../assets/images/lbcremovebg-removebg-preview.png";
import "./styles/Header.css";

const services = [
  { name: "Business Setup", path: "/services/business-setup" },
  { name: "Accounting", path: "/services/accounting" },
  { name: "Audit & Assurance", path: "/services/audit-assurance" },
  { name: "Legal Services", path: "/services/legal" },
  { name: "Compliance Services", path: "/services/compliance" },
  { name: "Tax Services", path: "/services/tax" },
  { name: "HR & PRO Services", path: "/services/hr-pro" },
  { name: "Documentation", path: "/services/documentation" },
  { name: "Technology", path: "/services/data-analytics" },
  { name: "ESG and Sustainability", path: "/services/esg-sustainability" },
  { name: "AML", path: "/services/aml" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    navigate(path);
  };

  const NavButton = ({
    children,
    onClick,
    hasDropdown = false,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    hasDropdown?: boolean;
  }) => (
    <button
      onClick={onClick}
      className="text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
        font-medium relative group py-2 cursor-pointer bg-transparent text-lg"
    >
      <div className="flex items-center">
        <span>{children}</span>
        {hasDropdown && (
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        )}
      </div>
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#856BAE] 
        group-hover:w-full transition-all duration-300"
      ></span>
    </button>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg h-24">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="logo-container">
            <button
              onClick={() => handleNavigation("/")}
              aria-label="Home"
              className="bg-transparent"
            >
              <img src={Logo} alt="LBG Logo" className="logo-image" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-16">
            {/* Services Dropdown */}
            <div className="relative group">
              <NavButton hasDropdown={true}>Our Services</NavButton>
              <div
                className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible
                             group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2"
              >
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(service.path)}
                    className="w-full text-left px-4 py-2 text-[#5D4A82] hover:text-[#856BAE] hover:bg-purple-50
                              transition-colors duration-300"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
            <NavButton onClick={() => handleNavigation("/company")}>
              Our Company
            </NavButton>

            <NavButton onClick={() => handleNavigation("/about")}>
              Why Us
            </NavButton>

            <NavButton onClick={() => handleNavigation("/blog")}>
              Blog
            </NavButton>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block relative">
            <button
              onClick={() => handleNavigation("/get-started")}
              className="group flex items-center gap-2 px-5 py-2.5 bg-[#5D4A82] hover:bg-[#856BAE] 
                       text-white rounded-full transition-all duration-300 ease-in-out
                       md:px-6 md:py-3 relative overflow-hidden shadow-lg hover:shadow-xl
                       transform hover:scale-105"
            >
              <FaHandshake className="text-lg md:text-xl" />
              <span className="hidden md:inline text-base whitespace-nowrap">
                Partner with Us
              </span>
              <span className="md:hidden text-sm whitespace-nowrap">
                Partner
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#5D4A82] via-[#856BAE] to-[#5D4A82]
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#5D4A82] hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 top-24 min-h-screen bg-white/95 backdrop-blur-sm shadow-lg border-t border-purple-100 pb-8 overflow-y-auto">
            <div className="flex flex-col space-y-2 max-w-3xl mx-auto px-4 pt-4">
              <button
                onClick={() => handleNavigation("/about")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-3 hover:bg-purple-50 rounded-lg cursor-pointer text-lg font-medium
                  bg-white/80 backdrop-blur-sm shadow-sm"
              >
                Why Us
              </button>

              <button
                onClick={() => handleNavigation("/company")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-3 hover:bg-purple-50 rounded-lg cursor-pointer text-lg font-medium
                  bg-white/80 backdrop-blur-sm shadow-sm"
              >
                Our Company
              </button>

              {/* Mobile Services Dropdown */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                    px-4 py-3 hover:bg-purple-50 rounded-lg cursor-pointer w-full flex justify-between items-center text-lg font-medium"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isServicesOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="border-t border-purple-100">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(service.path)}
                        className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                          px-6 py-3 hover:bg-purple-50 cursor-pointer w-full text-base
                          border-b border-purple-50 last:border-b-0"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation("/blog")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-3 hover:bg-purple-50 rounded-lg cursor-pointer text-lg font-medium
                  bg-white/80 backdrop-blur-sm shadow-sm"
              >
                Blog
              </button>

              <div className="pt-4">
                <button
                  onClick={() => handleNavigation("/get-started")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 
                           bg-[#5D4A82] hover:bg-[#856BAE] text-white rounded-full 
                           transition-all duration-300 ease-in-out text-base
                           shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaHandshake className="text-lg" />
                  <span>Partner with Us</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
