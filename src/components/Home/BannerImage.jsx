import React from "react";
import quranImage from "../../assets/images/quran.png";

const BannerImage = () => {
  return (
    <div className="md:w-4/12 flex justify-center">
      <img className="w-8/12" src={quranImage} alt="" />
    </div>
  );
};

export default BannerImage;
