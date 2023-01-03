/* eslint-disable react/prop-types */
import React from "react";

function SectionHeader({ children }) {
  return (
    <div>
      <h1 className="py-10 text-center text-4xl">{children}</h1>
    </div>
  );
}

export default SectionHeader;
