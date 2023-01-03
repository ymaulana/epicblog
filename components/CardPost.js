/* eslint-disable react/prop-types */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <Image
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
