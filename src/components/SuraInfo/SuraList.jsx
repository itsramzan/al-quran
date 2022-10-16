import React from "react";
import SuraListItem from "./SuraListItem";
import { useGetAllSuraInfoQuery } from "../../features/sura/suraApi";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useSelector } from "react-redux";
import numbering from "../../utils/numbering";

const SuraList = () => {
  const { isLoading, data: allSura, isError } = useGetAllSuraInfoQuery();
  const { search, placeSelect } = useSelector((state) => state.filter);

  // Decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <Error message="কোনো একটা সমস্যা হয়েছে..." />;

  if (!isLoading && !isError && allSura?.length === 0)
    content = <Error message="কোনো সূরা খুঁজে পাওয়া যায়নি..." />;

  if (!isLoading && !isError && allSura?.length > 0)
    content = (
      <>
        <h1 className="text-2xl text-green-700 font-semibold">সূরার তালিকা</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {allSura
            .filter(
              (sura) =>
                sura.en.toLowerCase().includes(search.toLowerCase()) ||
                sura.bn.toLowerCase().includes(search.toLowerCase()) ||
                sura.id === Number(search) ||
                numbering(sura.id) === numbering(search)
            )
            .filter((sura) => (placeSelect ? sura.place === placeSelect : true))
            .map((sura) => (
              <SuraListItem key={sura.id} sura={sura} />
            ))}
        </div>
      </>
    );

  return content;
};

export default SuraList;
