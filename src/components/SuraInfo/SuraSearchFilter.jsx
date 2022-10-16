import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaBorderAll, FaKaaba, FaMosque } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searched, placeSelected } from "../../features/filter/filterSlice";
import debounce from "../../utils/debounce";

const SuraSearchFilter = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState(search);

  const handleSearch = debounce((value) => {
    setSearchInput(value);
  });

  useEffect(() => {
    dispatch(searched(searchInput));

    return () => dispatch(searched(""));
  }, [searchInput, dispatch]);

  return (
    <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
      <form className="flex items-center relative">
        <input
          className="w-full ring-2 ring-gray-200 focus:ring-green-700 rounded-md pl-2 pr-12 py-2"
          type="text"
          spellCheck="false"
          placeholder="সূরা খুঁজুন.."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <IoSearch className="absolute right-4" />
      </form>

      <div className="flex items-center gap-4">
        <FilterIcon Icon={FaBorderAll} place="" text="সব" />
        <FilterIcon Icon={FaKaaba} place="মাক্কী" text="মাক্কী" />
        <FilterIcon Icon={FaMosque} place="মাদানী" text="মাদানী" />
      </div>
    </div>
  );
};

export default SuraSearchFilter;

const FilterIcon = ({ Icon, place, text }) => {
  const { placeSelect } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handlePlaceSelection = (value) => {
    dispatch(placeSelected(value));
  };

  return (
    <button
      className={`${placeSelect === place && "text-green-700"} flex items-center gap-2 cursor-pointer`}
      onClick={() => handlePlaceSelection(place)}
    >
      <Icon /> {text}
    </button>
  );
};
