import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4 md:px-12 bg-green-700 sticky top-0 z-50">
      <Link to="/" className="text-xl text-white font-bold">
        আল-কোরআন
      </Link>
      <Link to="/sura" className="bg-white text-green-700 px-4 py-1 rounded-md">সূরা</Link>
    </div>
  );
};

export default Navbar;
