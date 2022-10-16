import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { langSelected } from "../../features/filter/filterSlice";

const AyatFilter = () => {
  return (
    <div className="flex items-center gap-2">
      <AyatFilterBtn text="সব" lang="" />
      <AyatFilterBtn text="আরবী" lang="আরবী" />
      <AyatFilterBtn text="ইংরেজী" lang="ইংরেজী" />
      <AyatFilterBtn text="বাংলা" lang="বাংলা" />
    </div>
  );
};

export default AyatFilter;

const AyatFilterBtn = ({ text, lang, ...rest }) => {
  const { langSelect } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleLangSelection = (value) => {
    dispatch(langSelected(value));
  };

  return (
    <button
      {...rest}
      onClick={() => handleLangSelection(lang)}
      className={`px-4 py-1 rounded-md ${
        langSelect === lang && "bg-green-700 text-white"
      }`}
    >
      {text}
    </button>
  );
};
