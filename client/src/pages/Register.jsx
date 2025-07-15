import React, { use } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password))
      errors.push("Must contain an uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("Must contain a lowercase letter");
    if (password.length < 6) errors.push("Must be at least 6 characters long");
    return errors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, name, photo);
    // Password validity
    const validationErrors = validatePassword(password);
    if (validationErrors.length > 0) {
      Swal.fire("Error", validationErrors.join("<br>"), "error");
      return;
    }

    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result?.user, displayName: name, photoURL: photo });
            Swal.fire({
              icon: "success",
              title: "Your account is created.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="text-indigo-600 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
