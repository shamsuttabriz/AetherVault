import axios from "axios";
import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const UpdatedArtifact = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    name,
    image,
    type,
    context,
    createdAt,
    discoveredAt,
    discoveredBy,
    location,
    email
  } = data || {};

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const udpatedArtifact = Object.fromEntries(formData.entries());

    // Send updated artifact to the database
    axios
      .put(
        `${import.meta.env.VITE_API_URL}/updated-artifact/${_id}`,
        udpatedArtifact
      )
      .then((res) => {
        console.log("Update success: ", res.data);
        if (res?.data?.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your artifact has been updated!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/my-artifacts`);
        }
      })
      .catch((err) => {
        console.log("Update error: ", err);
      });
  };
  return (
    <div className="max-w-5xl mx-5 my-16  md:mx-auto ">
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Update Artifact
      </h2>
      <div className="p-6 bg-indigo-50 shadow-md rounded-xl">
        <form onSubmit={handleUpdatePlant} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Artifact Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter artifact name"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              Artifact Image (valid URL)
            </label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <select
            name="type"
            className="w-full border rounded px-3 py-2"
            defaultValue={type}
          >
            <option value="">Select Type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
            <option value="Others">Others</option>
          </select>

          <div>
            <label className="block text-gray-600 mb-1">
              Historical Context
            </label>
            <textarea
              name="context"
              rows="3"
              defaultValue={context}
              placeholder="Brief historical background"
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Created At</label>
              <input
                type="text"
                name="createdAt"
                defaultValue={createdAt}
                placeholder="e.g., 100 BC"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Discovered At</label>
              <input
                type="text"
                name="discoveredAt"
                defaultValue={discoveredAt}
                placeholder="e.g., 1799"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Discovered By</label>
            <input
              type="text"
              name="discoveredBy"
              defaultValue={discoveredBy}
              placeholder="Who discovered it?"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Present Location</label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Current location of the artifact"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full  py-2  bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded text-lg hover:from-indigo-700 hover:to-purple-700 transition cursor-pointer "
          >
            Update Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatedArtifact;
