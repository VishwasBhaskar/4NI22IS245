import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} style={{ margin: '1em' }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography>{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Feed;