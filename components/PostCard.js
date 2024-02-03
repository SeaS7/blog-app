''
import React from "react";
import appwriteService from "../services/config";
import Link from "next/link";

function PostCard({ $id, title, featuredimg }) {
  return (
    <Link href={`/posts/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredimg)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
