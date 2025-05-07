// src/components/Post.js
import React from 'react';

function Post({ title, body, commentsCount }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1em',
      margin: '0.5em 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p><strong>Comments:</strong> {commentsCount}</p>
    </div>
  );
}

export default Post;