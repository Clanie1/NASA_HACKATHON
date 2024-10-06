import React from "react";
import Home from "./LandingPage/Home";
import InfoSection from "./LandingPage/InfoSection";
import SubscribeSection from "./LandingPage/SubscribeSection";
import Footer from "./common/Footer";

const LandingPage = ({ info, subscribe, home, scrollToSection }) => {
  return (
    <div className="w-full flex flex-col">
      <Home ref1={home} scrollToSection={scrollToSection} />
      <InfoSection ref1={info} />
      <SubscribeSection ref1={subscribe} />
      <Footer />
    </div>
  );
};

export default LandingPage;
