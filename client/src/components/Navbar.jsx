import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { user, logOutUser } = use(AuthContext);
  const navigate = useNavigate();
  console.log(user?.photoURL);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-artifacts">All Artifacs</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/add-artifacts">Add Artifacts</NavLink>
          </li>
          <li>
            <NavLink to="/my-artifacts">My Artifacts</NavLink>
          </li>
          <li>
            <NavLink to="/liked-artifacts">Liked Artifacts</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
              className="w-8 lg:w-10"
              src="https://i.ibb.co/39sz9s47/camera.png"
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
          <div className="flex gap-2">
            <button className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block cursor-pointer">
              <img
                className="w-9 h-8 rounded-full object-cover"
                src={user?.photoURL}
                alt="Profile"
              />
            </button>
            <button
              onClick={() => {
                logOutUser(), navigate("/");
              }}
              className="btn btn-warning"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
