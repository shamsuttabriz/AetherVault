import React from "react";
import { motion } from "framer-motion";

const AddArtifacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Artifact Submitted:", e.target);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12 mb-20">
      {/* Heading and Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">
          Add New Artifact
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Submit a valuable piece of history. Fill out the details below to help
          preserve and share knowledge of our ancient past.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="bg-indigo-50 rounded-xl shadow-md p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Artifact Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Artifact Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., Rosetta Stone"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Artifact Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Artifact Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Artifact Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Artifact Type
            </label>
            <select
              name="type"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="">Select Type</option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
              <option value="Art">Art</option>
            </select>
          </div>

          {/* Historical Context */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Historical Context
            </label>
            <input
              type="text"
              name="context"
              placeholder="e.g., Used during Ptolemaic Period"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Created At */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Created At
            </label>
            <input
              type="text"
              name="createdAt"
              placeholder="e.g., 100 BC"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Discovered At */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Discovered At
            </label>
            <input
              type="text"
              name="discoveredAt"
              placeholder="e.g., 1799"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Discovered By */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Discovered By
            </label>
            <input
              type="text"
              name="discoveredBy"
              placeholder="e.g., Pierre-François Bouchard"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Present Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Present Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g., The British Museum, London"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Read-only Added By Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Added By
            </label>
            <input
              type="text"
              value="Unknown"
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Read-only Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value="Not logged in"
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Short Description
            </label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a short overview of the artifact..."
              required
              className="w-full border border-gray-300 rounded px-4 py-2 resize-none "
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition"
            >
              Add Artifact
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddArtifacts;
