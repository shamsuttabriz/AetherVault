import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {/* Brand Section */}
        <div className="flex items-center gap-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847z" />
          </svg>
          <div>
            <Link
              to="/"
              className="flex items-center gap-1 font-cinzel text-xl font-extrabold"
            >
              Aether<span className="text-[#FFCB61]">Vault</span>
            </Link>
            <p className="text-sm text-gray-400">
              Discover, Collect, and Share Ancient Artifacts
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:items-center">
          <h6 className="text-[#FFCB61] md:text-white text-lg font-medium mb-4">Follow Us</h6>
          <div className="flex gap-5 text-xl">
            <a
              href="#"
              className="hover:text-blue-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition duration-300"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t pt-5 md:border-none md:pt-auto sm:text-right text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Artifact Vault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
