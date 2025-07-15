import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhyPreserve = () => {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-indigo-50 py-20 px-6 md:px-12 my-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-3">
          Why Preserving Artifacts Matters
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Preserving artifacts safeguards our cultural identity and connects
          generations through shared history.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Cultural Continuity
            </h3>
            <p className="text-gray-600">
              Artifacts help pass cultural knowledge and identity from
              generation to generation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Educational Insight
            </h3>
            <p className="text-gray-600">
              They offer tangible evidence for learning about ancient societies
              and innovations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Historical Evidence
            </h3>
            <p className="text-gray-600">
              Artifacts serve as proof of how civilizations lived, evolved, and
              interacted.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyPreserve;
