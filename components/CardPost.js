import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <div className="relative mb-5 h-[180px]">
            <Image
              src={thumbnail}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="mb-4 w-full rounded  transition duration-300 hover:scale-105"
            />
          </div>
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;
