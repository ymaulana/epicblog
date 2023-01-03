import React from "react";

function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex item-center mt-5">
      <img
        src={authorAvatar}
        alt=""
        className="w-14 h-14 rounded-full object-cover"
      />
      <div className="ml-4">
        <h3>{authorName} </h3>
        <h3 className="text-tosca/60 text-sm mt-1">{authorJob}</h3>
      </div>
    </div>
  );
}

export default PostAuthor;
