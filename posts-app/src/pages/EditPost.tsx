import React, { useState, useEffect } from 'react';
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

const EditPost: React.FC<EditPostProps> = ({ posts, editPost }) => {
  const { postId } = useParams<{ postId: string }>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const postToEdit = posts.find(post => post.id === Number(postId));
    if (postToEdit) {
      setTitle(postToEdit.title);
      setBody(postToEdit.body);
    }
  }, [postId, posts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editPost({ id: Number(postId), title, body });
    navigate('/');
  };

  return (
    <div className="form-container">
      <h1>Edit Post</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;


