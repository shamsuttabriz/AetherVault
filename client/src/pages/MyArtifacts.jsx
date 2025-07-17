import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { useLoaderData } from "react-router";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const MyArtifacts = () => {
  const data = useLoaderData();
  const { loading } = use(AuthContext);
  const myArtifacts = data?.data || [];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (myArtifacts.length === 0) {
    return (
      <div className="text-center mt-16 text-gray-600">
        <p className="text-xl font-semibold">
          You haven’t added any artifacts yet.
        </p>
        <p className="mt-2">Start sharing your discoveries with the world!</p>
        <Link
          to="/add-artifacts"
          className="mt-4 inline-block  px-4 py-2  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-lg hover:from-indigo-700 hover:to-purple-700 transition"
        >
          Add Your First Artifact
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center my-8 mx-5"
      >
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">
          My Artifacts
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore historical artifacts, uncover their stories, and dive into our
          ancient past.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myArtifacts.map((artifact) => (
          <motion.div
            key={artifact._id}
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
                View Details
              </Link>
              <Link to={`/update-artifact/${artifact._id}`} className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                Update
              </Link>
              <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyArtifacts;
