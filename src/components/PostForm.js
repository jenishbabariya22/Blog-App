import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ onSubmit, initialPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Store the image file
  const [imagePreview, setImagePreview] = useState(''); // Store the image preview URL
  const navigate = useNavigate();

  useEffect(() => {
    if (initialPost) {
      setTitle(initialPost.title);
      setContent(initialPost.content);
      setImagePreview(initialPost.image); // Set initial image preview
    }
  }, [initialPost]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
      setImage(file); // Set the file
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = { title, content, image: imagePreview }; // Use image preview
      onSubmit(newPost);
      setTitle('');
      setContent('');
      setImage(null); // Reset image input
      setImagePreview(''); // Reset image preview
      toast.success('Post saved successfully!');
      navigate('/');
    } else {
      toast.error('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Create Post</h2>
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
          type="file"
          accept="image/*" // Accept only images
          onChange={handleImageChange}
          className="mb-4"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 h-32 w-full object-cover rounded"
          />
        )}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
