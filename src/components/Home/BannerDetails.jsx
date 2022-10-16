import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const BannerDetails = () => {
  return (
    <div className="md:w-4/12 flex flex-col gap-4">
      <h1 className="text-5xl text-green-700 font-bold">আল-কোরআন</h1>
      <p className="text-gray-700">
        আরবী , বাংলা এবং ইংরেজী অনুবাদ সহ আল- কোরআন এখন আপনার হাতের মুঠোয়, নিজে
        কোরআন শিখুন অন্যকে শেখান ও শিখতে উৎসাহিত করুন ।
      </p>
      <div>
        <Link
          to="/sura"
          className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          পড়ুন
          <IoArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BannerDetails;
