import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 pb-20 px-4 md:px-0">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-indigo-50 rounded-2xl shadow-lg p-8 md:p-12"
      >
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md p-6 text-center border border-indigo-100"
          >
            <div className="flex justify-center items-center mb-3">
              <div className="bg-indigo-100 text-violet-600 p-3 rounded-full">
                <FaEnvelope size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-indigo-700">Email</h3>
            <p className="text-gray-600 mt-1">aethervault@info.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md p-6 text-center border border-indigo-100"
          >
            <div className="flex justify-center items-center mb-3">
              <div className="bg-indigo-100 text-violet-600 p-3 rounded-full">
                <FaPhoneAlt size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-indigo-700">Phone</h3>
            <p className="text-gray-600 mt-1">+880 1234-567890</p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md p-6 text-center border border-indigo-100"
          >
            <div className="flex justify-center items-center mb-3">
              <div className="bg-indigo-100 text-violet-600 p-3 rounded-full">
                <FaMapMarkerAlt size={28} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-indigo-700">Location</h3>
            <p className="text-gray-600 mt-1">Dhaka, Bangladesh</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                required
                className="peer w-full border border-indigo-200 rounded-lg px-4 pt-5 pb-2 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-violet-600"
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                required
                className="peer w-full border border-indigo-200 rounded-lg px-4 pt-5 pb-2 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-violet-600"
              >
                Your Email
              </label>
            </div>
          </div>

          {/* Message Input */}
          <div className="relative group">
            <textarea
              id="message"
              rows="5"
              required
              className="peer w-full border border-indigo-200 rounded-lg px-4 pt-5 pb-2 bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-violet-600"
            >
              Your Message
            </label>
          </div>

          {/* Send Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(90deg, #6366F1, #8B5CF6, #A78BFA)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            ✉️ Send Message
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default ContactUs;
