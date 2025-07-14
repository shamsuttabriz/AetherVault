import React from "react";
import { useNavigate } from "react-router";

const FeaturedArtifacts = () => {
  const navigate = useNavigate();

  const artifacts = [
    {
      id: "1",
      name: "Rosetta Stone",
      description:
        "A granodiorite stele inscribed with three versions of a decree issued in Memphis, Egypt.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 89,
    },
    {
      id: "2",
      name: "Terracotta Army",
      description:
        "Thousands of life-sized clay soldiers buried with China's first emperor to guard him in the afterlife.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 132,
    },
    {
      id: "3",
      name: "Antikythera Mechanism",
      description:
        "An ancient Greek analog computer used to predict astronomical positions and eclipses.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 97,
    },
    {
      id: "4",
      name: "Dead Sea Scrolls",
      description:
        "Ancient Jewish texts discovered near the Dead Sea, dating back over 2000 years.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 76,
    },
    {
      id: "5",
      name: "Sutton Hoo Helmet",
      description:
        "An ornate Anglo-Saxon helmet found in a ship burial in England.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 64,
    },
    {
      id: "6",
      name: "Bust of Nefertiti",
      description:
        "A painted stucco-coated limestone bust of Nefertiti, the Great Royal Wife of Egyptian Pharaoh Akhenaten.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 104,
    },
    {
      id: "7",
      name: "Mohenjo-daro Dancing Girl",
      description:
        "A bronze statue of a young girl in a pose of dance, dating back to the Indus Valley Civilization.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 88,
    },
    {
      id: "8",
      name: "Venus of Willendorf",
      description:
        "A small Paleolithic figurine of a woman believed to be linked with fertility rituals.",
      image: "https://i.ibb.co/RTc7X1rn/1.jpg",
      likeCount: 71,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Featured Artifacts
        </h2>
        <p className="px-10 text-gray-700">
          Decoded ancient scripts; key to understanding Egyptian hieroglyphs and
          history
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-black rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="rounded-lg h-48 w-full object-cover mb-4 border border-warning"
            />
            <h3 className="text-xl font-semibold text-warning">
              {artifact.name}
            </h3>
            <p className="text-sm text-gray-400 my-2">
              {artifact.description.slice(0, 80)}...
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm text-gray-300">
                ❤️ {artifact.likeCount}
              </span>
              <button
                onClick={() => navigate(`/artifacts/${artifact._id}`)}
                className="text-sm bg-warning text-black px-3 py-1 rounded hover:bg-yellow-500 transition cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/all-artifacts")}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-full"
        >
          See All Artifacts
        </button>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
