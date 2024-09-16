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
    const localPosts = localStorage.getItem('posts');
    
    if (localPosts) {
      setPosts(JSON.parse(localPosts));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          const initialPosts = data.slice(0, 10);
          setPosts(initialPosts);
          localStorage.setItem('posts', JSON.stringify(initialPosts));
        });
    }
  }, []);

  // Add new post
    const addPost = (newPost: Post) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  // Edit existing post
  const editPost = (updatedPost: Post) => {
    const updatedPosts = posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  // Refresh to original posts from API
  const refreshPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const freshPosts = data.slice(0, 10);
        setPosts(freshPosts);
        localStorage.setItem('posts', JSON.stringify(freshPosts));
      });
  };

  return (
    <div>
      <Navbar />
      <button style={{ position: 'absolute', right: 0, top: '80px' }} onClick={refreshPosts}>Refresh to Original</button>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/add" element={<AddPost addPost={addPost} />} />
        <Route path="/edit/:postId" element={<EditPost posts={posts} editPost={editPost} />} />
      </Routes>
    </div>
  );
};

export default App;



