/* eslint-disable react/prop-types */
import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img
            src={thumbnail}
            alt=""
            className="mb-4 w-full rounded transition duration-300 hover:scale-105"
          />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;
