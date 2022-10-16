import React from "react";
import Heading from "../components/SuraView/Heading";
import AyatFilter from "../components/SuraView/AyatFilter";
import AyatList from "../components/SuraView/AyatList";
import ScrollTop from "../components/UI/ScrollTop";
import { useParams } from "react-router-dom";
import { useGetSuraQuery } from "../features/sura/suraApi";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

const SuraView = () => {
  const { id } = useParams();
  const { isLoading, data: sura, isError } = useGetSuraQuery(id);

  // Decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <Error message="কোনো একটা সমস্যা হয়েছে..." />;

  if (!isLoading && !isError && !sura)
    content = <Error message="কোনো সূরা খুঁজে পাওয়া যায়নি..." />;

  if (!isLoading && !isError && sura)
    content = (
      <>
        <Heading sura={sura} />
        <AyatFilter />
        <AyatList sura={sura} />
        <ScrollTop />
      </>
    );

  return <div className="space-y-4">{content}</div>;
};

export default SuraView;
