import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    if (sectionId === "about") {
      navigate("/about");
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    setIsMenuOpen(false);
    navigate("/get-started");
  };

  const NavButton = ({
    children,
    sectionId,
  }: {
    children: React.ReactNode;
    sectionId: string;
  }) => (
    <button
      onClick={() => handleNavigation(sectionId)}
      className="text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
        font-medium relative group py-2 cursor-pointer bg-transparent"
    >
      <span>{children}</span>
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#856BAE] 
        group-hover:w-full transition-all duration-300"
      ></span>
    </button>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <button
            className="flex items-center space-x-2 bg-transparent"
            onClick={() => navigate("/")}
            aria-label="Home"
          >
            <img
              src={logo}
              alt="LBG Logo"
              className="h-14 w-14 object-contain hover:scale-105 transition-transform duration-300"
            />
            <div className="text-[#5D4A82] font-bold text-xl hidden sm:block">
              Luminous Bluewaters Consulting
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavButton sectionId="home">Home</NavButton>
            <NavButton sectionId="services">Services</NavButton>
            <NavButton sectionId="about">About Us</NavButton>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white 
              px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 
              transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#5D4A82] hover:bg-purple-50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
          <div className="md:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("home")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-2 hover:bg-purple-50 rounded-lg cursor-pointer bg-transparent w-full"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("services")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-2 hover:bg-purple-50 rounded-lg cursor-pointer bg-transparent w-full"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-2 hover:bg-purple-50 rounded-lg cursor-pointer bg-transparent w-full"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="text-left text-[#5D4A82] hover:text-[#856BAE] transition-colors duration-300
                  px-4 py-2 hover:bg-purple-50 rounded-lg cursor-pointer bg-transparent w-full"
              >
                Contact
              </button>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white 
                px-6 py-2.5 rounded-lg font-medium hover:shadow-lg 
                transition-all duration-300 mx-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
