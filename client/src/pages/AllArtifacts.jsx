import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import ArtifactCard from "../components/ArtifactCard";
import { motion } from "framer-motion";

function AllArtifacts() {
  const data = useLoaderData();
  // const [artifacts, setArtifacts] = useState(data?.data);
  const artifacts = data?.data;

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="max-w-7xl mx-auto mb-10">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
}

export default AllArtifacts;
