import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { user, logOutUser } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(user?.photoURL);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold underline text-base"
      : "text-base";

  const links = (
    <>
      <li>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/all-artifacts">
          All Artifacts
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink className={navLinkClass} to="/add-artifacts">
              Add Artifact
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to={`/my-artifacts/${user?.email}`}>
              My Artifacts
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink className={navLinkClass} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="/register">
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="navbar bg-indigo-50 md:px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown cursor-pointer mr-2">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center gap-1 font-bold text-lg lg:text-xl"
        >
          Aether{" "}
          <span>
            <img
              className="w-6 md:w-8"
              src="https://i.ibb.co/DfhJ0v15/artifact-removebg-preview-1.png"
              alt=""
            />
          </span>{" "}
          Vault
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="w-10 h-10 rounded-full p-[2px] border-2 border-indigo-500 cursor-pointer"
            >
              <img
                className="w-full h-full rounded-full object-cover"
                src={user?.photoURL}
                alt="Profile"
              />
            </div>
            <ul
              tabIndex={0}
              className="menu bg-indigo-50 menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-boxn space-y-2 w-52"
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
                  onClick={handleLogout}
                  className="btn btn-warning text-base w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
