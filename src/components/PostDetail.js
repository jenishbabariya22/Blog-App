import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p className="text-center">Post not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover rounded mb-4"
        />
      )}
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostDetail;
