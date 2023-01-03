import React from "react";
import PostAuthor from "./PostAuthor";
import PostMetaTitile from "./PostMetaTitile";

function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitile category={category} date={date} title={title} />
      <p className="text-tosca/60 mt-5 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}

export default InfoPost;
