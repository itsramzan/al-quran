import React from "react";
import { BsJournalArrowUp } from "react-icons/bs";

const ScrollTop = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="fixed bottom-4 right-4 text-green-700 z-50 cursor-pointer"
      onClick={scrollTop}
      title="Back to top"
    >
      <BsJournalArrowUp />
    </div>
  );
};

export default ScrollTop;
