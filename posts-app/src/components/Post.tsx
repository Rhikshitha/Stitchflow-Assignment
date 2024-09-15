import React from 'react';
import '../styles/Post.css';

type PostProps = {
  id: number;
  title: string;
  body: string;
  onEdit: (id: number) => void;
};

const Post: React.FC<PostProps> = ({ id, title, body, onEdit }) => (
  <div className="post-card">
    <h2 className="post-title">{title}</h2>
    <p className="post-body">{body}</p>
    <button className="edit-button" onClick={() => onEdit(id)}>Edit</button>
  </div>
);

export default Post;