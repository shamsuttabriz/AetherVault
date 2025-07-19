import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function MyArtifactCard({ artifact, handleDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-indigo-50 rounded-xl shadow p-4 flex flex-col justify-between"
    >
      <img
        src={artifact.image}
        alt={artifact.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {artifact.name}
      </h3>
      <p className="text-sm text-gray-500 mb-3">{artifact.type}</p>

      <div className="flex flex-wrap gap-3 mt-auto">
        <Link
          to={`/artifact-detail/${artifact._id}`}
          className="px-3 py-1 bg-indigo-600 text-sm text-white rounded hover:bg-indigo-700"
        >
          View
        </Link>
        <Link
          to={`/update-artifact/${artifact._id}`}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Update
        </Link>
        <button
          onClick={() => handleDelete(artifact._id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default MyArtifactCard;
