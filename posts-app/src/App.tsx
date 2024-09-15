import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Navbar from './components/Navbar';
import Home from './pages/Home';

type Post = {
  id: number;
  title: string;
  body: string;
};

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)));// Fetching only 10 posts from the API
  }, []);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const editPost = (updatedPost: Post) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/add" element={<AddPost addPost={addPost} />} />
        <Route path="/edit/:postId" element={<EditPost posts={posts} editPost={editPost} />} />
      </Routes>
    </div>
  );
};

export default App;


