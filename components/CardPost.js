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
            className="w-full rounded mb-4 hover:scale-105 transition duration-300"
          />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;
