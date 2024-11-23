import logo from "../../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#5D4A82] to-[#856BAE] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="LBG Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold">LBC</span>
            </div>
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
                <a
                  href="#home"
                  className="hover:text-white/80 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white/80 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white/80 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white/80 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: info@lumi-blue.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add your social media links here */}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/90">
            © {currentYear} Luminous Bluewaters Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
