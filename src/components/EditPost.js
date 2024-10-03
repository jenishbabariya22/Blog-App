import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = ({ posts, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image);
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const updatedPost = { title, content, image };
      onUpdate(parseInt(id), updatedPost);
      toast.success('Post updated successfully!');
      navigate('/');
    } else {
      toast.error('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
