/* eslint-disable react/prop-types */
import React from "react";

function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="item-center mt-5 flex">
      <img
        src={authorAvatar}
        alt=""
        className="h-14 w-14 rounded-full object-cover"
      />
      <div className="ml-4">
        <h3>{authorName} </h3>
        <h3 className="mt-1 text-sm text-tosca/60">{authorJob}</h3>
      </div>
    </div>
  );
}

export default PostAuthor;
