import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

function Profile() {
  const { user } = useContext(AuthContext);

  const profileData = {
    name: user?.displayName || "John Doe",
    email: user?.email || "user@example.com",
    photo: user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    bio: "Digital explorer. Lover of ancient secrets. Builder of the future.",
    stats: {
      artifacts: 12,
      likes: 53,
      comments: 18,
    },
  };

  const handleEdit = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "I didn’t get time to do it.",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-10"
    >
      <Helmet>
        <title>AetherVoult | Profile</title>
      </Helmet>
      {/* Header */}
      <div className="relative h-56 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-b-3xl shadow-lg">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            src={profileData.photo}
            alt="User Avatar"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-20 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {profileData.name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {profileData.email}
        </p>
        <p className="mt-3 text-gray-700 dark:text-gray-200">
          {profileData.bio}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 mx-5 md:max-w-md md:mx-auto grid grid-cols-3 gap-4 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl py-4"
        >
          <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {profileData.stats.artifacts}
          </p>
          <p className="text-gray-600 dark:text-gray-300">Artifacts</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl py-4"
        >
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {profileData.stats.likes}
          </p>
          <p className="text-gray-600 dark:text-gray-300">Likes</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl py-4"
        >
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            {profileData.stats.comments}
          </p>
          <p className="text-gray-600 dark:text-gray-300">Comments</p>
        </motion.div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-10 text-center">
        <button
          onClick={handleEdit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow transition"
        >
          Edit Profile
        </button>
      </div>
    </motion.div>
  );
}

export default Profile;
