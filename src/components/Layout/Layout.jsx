import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto] bg-gray-200">
      <Navbar />
      <div className="px-4 py-4 md:px-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
