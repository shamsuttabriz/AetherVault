import React, { useState, use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#FFCB61] font-bold transition-colors duration-200 w-full block"
      : "text-gray-300 font-semibold hover:text-[#FFCB61] transition-colors duration-200 w-full block";

  const links = (
    <>
      <li>
        <NavLink
          className={navLinkClass}
          to="/"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navLinkClass}
          to="/all-artifacts"
          onClick={() => setMobileMenuOpen(false)}
        >
          All Artifacts
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className={navLinkClass}
              to="/add-artifacts"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Artifact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClass}
              to="/my-artifacts"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Artifacts
            </NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink
              className={navLinkClass}
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile Info
            </NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink
              className={navLinkClass}
              to="/liked-artifacts"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liked Artifacts
            </NavLink>
          </li>
          <li className="lg:hidden">
            <button
              onClick={() => {
                logOut();
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="btn bg-[#FFCB61] hover:bg-[#f7b933] text-black font-bold w-full mt-2"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={navLinkClass}
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClass}
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 font-cinzel text-xl md:text-2xl font-extrabold"
        >
          Aether<span className="text-[#FFCB61]">Vault</span>
        </Link>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-[#FFCB61] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal px-1 flex items-center gap-6">
            {links}
          </ul>

          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="w-10 h-10 rounded-full border-2 border-[#FFCB61] cursor-pointer overflow-hidden"
              >
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-gray-900 text-white rounded-box w-52 space-y-2 z-50"
              >
                <li>
                  <NavLink className={navLinkClass} to="/profile">
                    Profile Info
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClass} to="/liked-artifacts">
                    Liked Artifacts
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logOut();
                      navigate("/");
                    }}
                    className="btn bg-[#FFCB61] hover:bg-[#f7b933] text-black font-bold w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Menu with Smooth Transition */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black/95 shadow-lg z-50 p-6 flex flex-col space-y-4 transform transition-transform duration-500 ease-in-out
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="self-end text-gray-300 hover:text-[#FFCB61] text-2xl font-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col gap-2">{links}</ul>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-500"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
