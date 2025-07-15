import React from "react";
import Slider from "../components/Slider";
import FeaturedArtifacts from "../components/FeaturedArtifacts";
import WhyPreserve from "../components/WhyPreserve";
import AnimatedStatsSection from "../components/AnimatedStatsSection";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedArtifacts />
      <WhyPreserve />
      <AnimatedStatsSection />
    </div>
  );
}

export default Home;
