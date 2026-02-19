import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export function FooterComponenet() {
  return (
    <footer className="bg-slate-700 text-white pt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About MyCompany</h3>
          <p className="text-sm md:text-base">
            We provide the best solutions for your business. Our mission is to
            deliver high-quality products and services that help our clients
            succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg md:text-xl">
            <a href="#facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#twitter" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#linkedin" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-sm md:text-base mb-4">
            Subscribe to get our latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-black flex-1"
            />
            <button className="bg-slate-400 text-black font-bold px-4 py-2 rounded hover:bg-blue-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 mt-12 py-6 text-center text-sm md:text-base">
        &copy; 2026 MyCompany. All rights reserved.
      </div>
    </footer>
  );
}
