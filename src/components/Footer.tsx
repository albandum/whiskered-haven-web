
import { Link } from "react-router-dom";
import { Shield, Mail, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CyberSecure Academy</h3>
                <p className="text-sm text-gray-300">Professional Training</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering cybersecurity professionals with cutting-edge training and certifications. 
              Our expert-led courses prepare you for real-world security challenges and career advancement.
            </p>
            <div className="flex space-x-4">
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                <Users className="h-5 w-5" />
              </button>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Available Courses</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Cyber Security Blvd</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (555) 123-CYBER</p>
              <p>Email: info@cybersecureacademy.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CyberSecure Academy. All rights reserved. Securing the future, one professional at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
