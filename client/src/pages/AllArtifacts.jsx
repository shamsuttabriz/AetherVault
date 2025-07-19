import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ArtifactCard from "../components/ArtifactCard";
import { motion } from "framer-motion";
import axios from "axios";
import { Helmet } from "react-helmet-async";

function AllArtifacts() {
  const { data } = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [artifacts, setArtifacts] = useState();
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setArtifacts(data);
    setFilteredArtifacts(data);
  }, [data]);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);

    const filtered = artifacts.filter((artifact) =>
      artifact.name.toLowerCase().includes(text)
    );

    setFilteredArtifacts(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <Helmet>
        <title>AetherVoult | All-Artifacts</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center my-8 mx-5"
      >
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">
          All Artifacts
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore historical artifacts, uncover their stories, and dive into our
          ancient past.
        </p>
      </motion.div>

      <div className="px-5 p-8">
        {/* Search Box */}
        <div className="mb-6 mx-4 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="🔍 Search artifact by name..."
              className="w-full py-3 px-5 pl-12 text-gray-800 placeholder-gray-400 rounded-xl shadow-lg border border-gray-300 bg-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 ease-in-out"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* All Artifacts Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {filteredArtifacts.map((artifact) => (
            <ArtifactCard key={artifact._id} artifact={artifact} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllArtifacts;
