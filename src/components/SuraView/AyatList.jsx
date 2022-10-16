import React from "react";
import AyatListItem from "./AyatListItem";

const AyatList = ({ sura }) => {
  const { ar, en, bn, place, ayats } = sura || {};

  return (
    <div className="space-y-4">
      {ayats.map((ayat) => (
        <AyatListItem
          key={ayat.ayatNo}
          ayat={ayat}
          info={{ ar, en, bn, place }}
        />
      ))}
    </div>
  );
};

export default AyatList;
