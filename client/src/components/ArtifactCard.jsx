import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ArtifactCard = ({ artifact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 h-56 border border-neutral-300 dark:border-neutral-700 rounded shadow-md overflow-hidden transition-all"
    >
      <motion.img
        src={artifact.image}
        alt={artifact.name}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full flex-1 md:w-1/2 h-1/2 md:h-64 object-cover"
      />

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-3 flex-1 text-center md:text-left space-y-2"
      >
        <h2 className="text-lg font-bold text-neutral-800 dark:text-white">
          {artifact.name}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Liked: {artifact.likedBy.length}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Type: {artifact.type}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Created: {artifact.createdAt}
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to={`/artifact-detail/${artifact._id}`}
            className="inline-block w-full mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-sm hover:from-indigo-700 hover:to-purple-700 transition"
          >
            View Detail
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ArtifactCard;
