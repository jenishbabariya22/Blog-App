import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, onDelete }) => {
  return (
    <div className="max-w-7xl mx-auto mt-8"> {/* Increased the max-width for the container */}
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg w-full h-96 max-w-xl"> {/* Adjusted width and height */}
              <Link to={`/posts/${post.id}`}>
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.content.substring(0, 150)}...</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mt-4 h-48 w-full object-cover rounded"
                  />
                )}
              </Link>
              <div className="flex justify-between mt-4">
                <Link to={`/edit/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(post.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
