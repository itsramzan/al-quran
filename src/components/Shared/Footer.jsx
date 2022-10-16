import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 py-4 md:px-12">
      <p className="text-gray-700">
        কপিরাইট ©{" "}
        <Link to="/" className="text-green-700">
          আল-কোরআন
        </Link>
      </p>
    </div>
  );
};

export default Footer;
