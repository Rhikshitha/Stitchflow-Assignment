import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPost.css';

type Post = {
  id: number;
  title: string;
  body: string;
};

type AddPostProps = {
  addPost: (newPost: Post) => void;
};

const AddPost = ({ addPost }: AddPostProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    addPost(newPost);
    setTitle('');
    setBody('');
    navigate('/'); 
  };

  return (
    <div className="form-container">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id = "title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your thought?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id = "body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Elaborate your thoughts!"
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
