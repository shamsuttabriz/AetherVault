import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";

function LikedArtifacts() {
  const { user } = use(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/liked-artifacts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setLikedArtifacts(data));
  }, [user]);

  console.log("Amar Liked Artifacts: ", likedArtifacts);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-indigo-700 mb-2"
      >
        All Liked Artifacts
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-lg text-gray-600 mb-10"
      >
        Here are all the artifacts you’ve liked. Discover your taste in history and culture.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likedArtifacts.map((artifact) => (
          <motion.div
            key={artifact._id}
            className="shadow-md bg-indigo-50 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-42 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {artifact.name}
              </h2>
              <p className="text-slate-700 my-2">{artifact.discoveredBy}</p>
              <Link
                to={`/artifact-detail/${artifact._id}`}
                className="block w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-base hover:from-indigo-700 hover:to-purple-700 cursor-pointer px-3 py-1 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LikedArtifacts;
