import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import numbering from "../../utils/numbering";
import copyToClipboard from "../../utils/copyToClipboard";
import { toast } from "react-toastify";

const AyatListItem = ({ ayat, info }) => {
  const { ayatNo, arabic, english, bangla } = ayat || {};
  const { ar, en, bn, place } = info || {};
  const { langSelect: lang } = useSelector((state) => state.filter);

  const handleCopying = async () => {
    const source = `সূরা : ${ar}/${en}/${bn} - আয়াত নং : ${numbering(
      ayatNo
    )} - সূরার ধরণ : ${place}`;
    const data = `${arabic}\n\n${english}\n\n${bangla}\n\n\n${source}`;

    await copyToClipboard(data);
    toast.success("সফলভাবে কপি করা হয়েছে");
  };

  return (
    <div className="bg-white rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <p className="text-lg text-green-700 font-bold">{numbering(ayatNo)}</p>
        <IoCopyOutline className="cursor-pointer" onClick={handleCopying} />
      </div>

      {(lang === "" || lang === "আরবী") && (
        <p className="text-right">{arabic}</p>
      )}
      {(lang === "" || lang === "ইংরেজী") && <p>{english}</p>}
      {(lang === "" || lang === "বাংলা") && <p>{bangla}</p>}
    </div>
  );
};

export default AyatListItem;
