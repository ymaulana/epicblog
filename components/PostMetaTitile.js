/* eslint-disable react/prop-types */
import Link from "next/link";
import React from "react";

function PostMetaTitile({ category, title, date, center }) {
  return (
    <>
      <div className="item-center flex space-x-4 text-tosca/60">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`mt-4 text-2xl ${center ? "text-center" : ""}`}>
        <Link href="/detail">
          <a className=" hover:text-lightPink">{title}</a>
        </Link>
      </h2>
    </>
  );
}

export default PostMetaTitile;
