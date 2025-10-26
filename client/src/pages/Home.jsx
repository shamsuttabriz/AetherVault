import React from "react";
import Slider from "../components/Slider";
import FeaturedArtifacts from "../components/FeaturedArtifacts";
import WhyPreserve from "../components/WhyPreserve";
import AnimatedStatsSection from "../components/AnimatedStatsSection";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedArtifacts />
      <WhyPreserve />
      <AnimatedStatsSection />
      <ContactUs />
    </div>
  );
}

export default Home;
