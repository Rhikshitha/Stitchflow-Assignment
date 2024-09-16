import React from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post';
import '../styles/Home.css';

type Post = {
  id: number;
  title: string;
  body: string;
};

type HomeProps = {
  posts: Post[];
};

const Home = ({ posts }: HomeProps) => {
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h1 className="title">🔥 Explore What’s Hot & New! 🚀</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <Post key={post.id} {...post} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default Home;
