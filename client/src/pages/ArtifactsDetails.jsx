import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../contexts/AuthContext";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const ArtifactDetails = () => {
  const { user } = use(AuthContext);
  const { data } = useLoaderData();
  console.log(data);
  const [artifact, setArtifact] = useState(data);
  const [liked, setLiked] = useState(artifact?.likedBy?.includes(user?.email));
  const [likeCount, setLikeCount] = useState(0);
  console.log(artifact);

  useEffect(() => {
    setLikeCount(artifact?.likedBy?.includes(user?.email));
  }, [artifact, user]);

  useEffect(() => {
    setLikeCount(artifact?.likedBy?.length);
  }, [artifact]);

  // Handle like / dislike
  const handleLike = () => {
    if (user?.email === artifact?.email) return alert("Lojja lage na tor?");

    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${artifact?._id}`, {
        email: user?.email,
      })
      .then((data) => {
        console.log(data?.data);
        const isLiked = data?.data?.liked;
        // update liked state
        setLiked(isLiked);
        // update likeCount State
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
          Artifact Details
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Dive deeper into the history, origin, and significance of each
          artifact. Discover fascinating stories behind ancient objects.
        </p>
      </motion.div>

      {/* Back Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-indigo-600 hover:underline text-sm font-semibold"
        >
          ← Back to Artifacts
        </Link>
      </div>

      {/* Artifact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-slate-900 shadow-md rounded-lg overflow-hidden md:flex"
      >
        <div className="md:w-1/2 flex-1">
          <img
            src={artifact?.image}
            alt={artifact?.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-4 flex-1">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
            {artifact?.name}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            <span className="font-medium">Type:</span> {artifact?.type}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-medium">Created:</span> {artifact?.createdAt}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            <span className="font-medium">Context:</span> {artifact?.context}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            <span className="font-medium">Like:</span> {likeCount}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            <span className="font-medium">Discovered By:</span>{" "}
            {artifact?.discoveredBy}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            <span className="font-medium">Current Location:</span>{" "}
            {artifact?.location}
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-200 mt-2">
            {artifact?.description}
          </p>
          <button
              onClick={handleLike}
            className=" py-2 block text-center w-24 bg-amber-200 rounded-full transition cursor-pointer"
          >
            {liked ? (
              <span className="flex gap-2 text-sm font-semibold justify-center items-center text-red-500">
                <FaHeart /> Loved
              </span>
            ) : (
              <span className="flex gap-2 text-sm font-semibold text-slate-700 justify-center items-center ">
                <FaHeart /> <span>Love</span>
              </span>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtifactDetails;
