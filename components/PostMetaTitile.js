import Link from "next/link";
import React from "react";

function PostMetaTitile({ category, title, date, center }) {
  return (
    <>
      <div className="flex item-center text-tosca/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? "text-center" : ""}`}>
        <Link href="/detail">
          <a className=" hover:text-lightPink">{title}</a>
        </Link>
      </h2>
    </>
  );
}

export default PostMetaTitile;
