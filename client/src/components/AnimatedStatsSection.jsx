import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobeAsia, FaArchive, FaUsers } from "react-icons/fa"; // 🌍 📦 👥

const stats = [
  {
    id: 1,
    label: "Countries Contributed",
    value: 120,
    icon: <FaGlobeAsia size={36} />,
  },
  {
    id: 2,
    label: "Historical Artifacts Archived",
    value: 3000,
    icon: <FaArchive size={36} />,
  },
  {
    id: 3,
    label: "Visitors Every Year",
    value: 1000000,
    icon: <FaUsers size={36} />,
  },
];

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
  }, [end, duration]);

  return count;
};

const AnimatedStatsSection = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 px-4 md:px-0"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">
            Our Global Impact
          </h2>
          <p className="text-gray-600 text-lg">
            We preserve history across borders with dedication and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mx-4">
          {stats.map((stat) => {
            const count = useCountUp(stat.value);
            return (
              <motion.div
                key={stat.id}
                className="rounded-lg p-6 shadow bg-indigo-50"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-violet-600">
                  {stat.id === 3
                    ? `${(count / 1000000).toFixed(1)}M+`
                    : `${count}+`}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default AnimatedStatsSection;
