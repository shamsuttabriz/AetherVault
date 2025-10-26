import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const FeaturedArtifacts = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const artifacts = Array.isArray(data?.data) ? data.data : []; // ✅ Safe array check

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-10">
      {/* Title Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center py-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-3">
          Featured Artifacts
        </h2>
        <p className="px-10 text-lg text-gray-700">
          Decoded ancient scripts key to understanding Egyptian hieroglyphs and
          history
        </p>
      </motion.div>

      {/* Cards with motion */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {artifacts.slice(0, 6).map((artifact, index) => (
          <motion.div
            key={artifact._id || index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-indigo-50 rounded-xl shadow-md p-5 flex flex-col cursor-pointer"
          >
            <img
              src={artifact.image || ""}
              alt={artifact.name || "Artifact"}
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700">
              {artifact.name || "Unknown Artifact"}
            </h3>
            <p className="text-sm text-gray-600 my-2">
              {artifact.description
                ? artifact.description.slice(0, 80)
                : "No description available"}
              ...
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700">
                Created: {artifact.createdAt || "Unknown"}
              </span>
              <Link
                to={`/artifact-detail/${artifact._id || ""}`}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-sm hover:from-indigo-700 hover:to-purple-700 cursor-pointer px-3 py-1 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <button
          onClick={() => navigate("/all-artifacts")}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-base hover:from-indigo-700 hover:to-purple-700 cursor-pointer font-medium px-6 py-2"
        >
          See All Artifacts
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturedArtifacts;
