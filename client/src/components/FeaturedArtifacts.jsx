import React from "react";
import { useLoaderData, useNavigate } from "react-router";
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
  const artifacts = data?.data;

  // const artifacts = [
  //   {
  //     id: "1",
  //     name: "Rosetta Stone",
  //     description:
  //       "A granodiorite stele inscribed with three versions of a decree issued in Memphis, Egypt.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 89,
  //   },
  //   {
  //     id: "2",
  //     name: "Terracotta Army",
  //     description:
  //       "Thousands of life-sized clay soldiers buried with China's first emperor to guard him in the afterlife.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 132,
  //   },
  //   {
  //     id: "3",
  //     name: "Antikythera Mechanism",
  //     description:
  //       "An ancient Greek analog computer used to predict astronomical positions and eclipses.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 97,
  //   },
  //   {
  //     id: "4",
  //     name: "Dead Sea Scrolls",
  //     description:
  //       "Ancient Jewish texts discovered near the Dead Sea, dating back over 2000 years.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 76,
  //   },
  //   {
  //     id: "5",
  //     name: "Sutton Hoo Helmet",
  //     description:
  //       "An ornate Anglo-Saxon helmet found in a ship burial in England.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 64,
  //   },
  //   {
  //     id: "6",
  //     name: "Bust of Nefertiti",
  //     description:
  //       "A painted stucco-coated limestone bust of Nefertiti, the Great Royal Wife of Egyptian Pharaoh Akhenaten.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 104,
  //   },
  //   {
  //     id: "7",
  //     name: "Mohenjo-daro Dancing Girl",
  //     description:
  //       "A bronze statue of a young girl in a pose of dance, dating back to the Indus Valley Civilization.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 88,
  //   },
  //   {
  //     id: "8",
  //     name: "Venus of Willendorf",
  //     description:
  //       "A small Paleolithic figurine of a woman believed to be linked with fertility rituals.",
  //     image: "https://i.ibb.co/RTc7X1rn/1.jpg",
  //     likeCount: 71,
  //   },
  // ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
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
            key={artifact._id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-indigo-50 rounded-xl shadow-md p-5 flex flex-col cursor-pointer"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700">
              {artifact.name}
            </h3>
            <p className="text-sm text-gray-600 my-2">
              {artifact.description.slice(0, 80)}...
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700">
              Created: {artifact.createdAt}
              </span>
              <button
                onClick={() => navigate(`/artifacts/${artifact.id}`)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-sm hover:from-indigo-700 hover:to-purple-700 cursor-pointer px-3 py-1 transition"
              >
                View Details
              </button>
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
