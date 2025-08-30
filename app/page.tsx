import React from "react";
import Hero from "./sections/Hero";
import OurTeam from "./sections/OurTeam";
import Testimonial from "./sections/Testimonial";

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <OurTeam />
      <Testimonial />
    </div>
  );
};

export default page;
