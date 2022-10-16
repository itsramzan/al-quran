import React from "react";
import BannerImage from "../components/Home/BannerImage";
import BannerDetails from "../components/Home/BannerDetails";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-16 md:gap-0 md:flex-row">
      <BannerImage />
      <BannerDetails />
    </div>
  );
};

export default Home;
