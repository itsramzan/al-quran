import React from "react";
import numbering from "../../utils/numbering";

const Heading = ({ sura }) => {
  const { ar, en, bn, totalAyat, place } = sura || {};

  return (
    <div className="bg-green-700 p-4 rounded-md space-y-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg text-white font-bold">{ar}</p>
        <p className="text-lg text-white font-bold">{en}</p>
        <p className="text-lg text-white font-bold">{bn}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-white font-semibold">
          আয়াত : {numbering(totalAyat)}
        </p>
        <p className="text-white font-semibold">সূরার ধরণ : {place}</p>
      </div>
    </div>
  );
};

export default Heading;
