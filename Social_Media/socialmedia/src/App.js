import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#1976d2', padding: '1em', color: 'white' }}>
        <h1>Social Media Analytics</h1>
      </div>
      <div style={{ padding: '1em' }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
