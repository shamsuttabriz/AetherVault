import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
import MyArtifactCard from "../components/MyArtifactCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyArtifacts = () => {
  // const data = useLoaderData();
  const { user } = use(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axiosSecure(`/my-artifacts`)
      .then((data) => {
        console.log(data?.data);
        setMyArtifacts(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, axiosSecure]);

  if (loading) {
    return <Loading />;
  }

  console.log(myArtifacts);

  if (myArtifacts.length === 0) {
    return (
      <div className="text-center mt-16 text-gray-600">
        <Helmet>
        <title>AetherVault | My-Artifacts</title>
      </Helmet>
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Start Deleteting
        axios
          .delete(`${import.meta.env.VITE_API_URL}/my-artifacts/${_id}`)
          .then((res) => {
            console.log("Delete Successfully: ", res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your Artifact has been deleted.",
              icon: "success",
            });
            // remove the artifact from the state
            const remainingArtifacts = myArtifacts.filter(
              (artifact) => artifact._id !== _id
            );
            setMyArtifacts(remainingArtifacts);
          })
          .catch((err) => {
            console.log("Client Error: ", err);
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Helmet>
        <title>AetherVoult | My-Artifacts</title>
      </Helmet>
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
          <MyArtifactCard
            key={artifact._id}
            artifact={artifact}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyArtifacts;
