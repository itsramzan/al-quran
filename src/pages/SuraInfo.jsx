import React from "react";
import SuraSearchFilter from "../components/SuraInfo/SuraSearchFilter";
import SuraList from "../components/SuraInfo/SuraList";
import ScrollTop from "../components/UI/ScrollTop";

const SuraInfo = () => {
  return (
    <div className="space-y-4">
      <SuraSearchFilter />
      <SuraList />
      <ScrollTop />
    </div>
  );
};

export default SuraInfo;
