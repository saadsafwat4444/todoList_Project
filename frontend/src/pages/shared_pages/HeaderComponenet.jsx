import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function HeaderComponenet() {
  const [isOpen, setIsOpen] = useState(false);

  const { token, logout } = useAuth();

  return (
    <header className="bg-slate-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/dashboard/about" className="hover:text-blue-400">
            About
          </Link>

          {token && (
            <button
              onClick={logout}
              className="ml-4 bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-slate-700 px-4 pb-4 space-y-2">
         <Link to="/dashboard" className="block hover:text-blue-400">
            Home
          </Link>
          <Link to="/dashboard/about" className="block hover:text-blue-400">
            About
          </Link>
          {/* <a href="#services" className="block hover:text-blue-400">
            Services
          </a>
          <a href="#contact" className="block hover:text-blue-400">
            Contact
          </a> */}
          {token && (
            <button
              onClick={logout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition mt-2"
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
