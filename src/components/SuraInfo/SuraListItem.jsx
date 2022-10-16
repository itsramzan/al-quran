import React from "react";
import { FaKaaba, FaMosque } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import numbering from "../../utils/numbering";

const SuraListItem = ({ sura }) => {
  const { id, ar, en, bn, place, totalAyat } = sura || {};

  return (
    <Link
      to={`/sura/${id}`}
      className="bg-white p-4 rounded-md space-y-4 transition-all duration-500 group hover:bg-green-700"
    >
      <div className="flex justify-between items-center">
        <p className="text-xl text-green-700 font-semibold group-hover:text-white">
          {numbering(id)}
        </p>
        {place === "মাক্কী" ? (
          <FaKaaba className="text-gray-500 group-hover:text-white" />
        ) : (
          <FaMosque className="text-gray-500 group-hover:text-white" />
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-right group-hover:text-white">
          {ar}
        </p>
        <p className="text-sm font-semibold group-hover:text-white">{en}</p>
        <p className="text-sm font-semibold group-hover:text-white">{bn}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-500 font-semibold group-hover:text-white">
          আয়াত : {numbering(totalAyat)}
        </p>
        <IoArrowForwardCircleOutline className="text-lg text-green-700 group-hover:text-white" />
      </div>
    </Link>
  );
};

export default SuraListItem;
