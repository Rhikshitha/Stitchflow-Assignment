import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Post = {
  id: number;
  title: string;
  body: string;
};

type EditPostProps = {
  posts: Post[];
  editPost: (updatedPost: Post) => void;
};

const EditPost = ({ posts, editPost }: EditPostProps) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(postId || '', 10));

  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post) {
      const updatedPost = { ...post, title, body };
      editPost(updatedPost);
      navigate('/');
    }
  };

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="form-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your thoughts?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Elaborate your thoughts!"
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
