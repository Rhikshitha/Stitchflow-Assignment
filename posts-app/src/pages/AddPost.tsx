import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPost.css';

type AddPostProps = {
  addPost: (newPost: { id: number; title: string; body: string }) => void;
};

const AddPost: React.FC<AddPostProps> = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 1000) + 101,
      title,
      body,
    };
    addPost(newPost);
    navigate('/'); 
  };

  return (
    <div className="form-container">
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post body"
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;

