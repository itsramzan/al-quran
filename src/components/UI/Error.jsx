import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      <p className="text-red-700">{message}</p>
    </div>
  );
};

export default Error;
