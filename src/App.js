import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost'; // Import the EditPost component
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addPost = (post) => {
    setPosts([...posts, { id: nextId, ...post }]);
    setNextId(nextId + 1);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast.success('Post deleted successfully!');
  };

  const editPost = (id, updatedPost) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post)));
    toast.success('Post updated successfully!');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* <main className="flex-grow"> */}
        <Routes>
          <Route path="/" element={<PostList posts={posts} onDelete={deletePost} />} />
          <Route path="/create" element={<PostForm onSubmit={addPost} />} />
          <Route path="/edit/:id" element={<EditPost posts={posts} onUpdate={editPost} />} /> New route
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
        </Routes>
        {/* </main> */}
        <Footer />
      </div>
      {/* <ToastContainer /> */}
    </Router>
  );
};

export default App;
