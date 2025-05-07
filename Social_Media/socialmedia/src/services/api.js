import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchPosts = async () => {
  return await axios.get(${API_URL}/posts);
};

export const fetchUsers = async () => {
  return await axios.get(${API_URL}/users);
};

export const fetchComments = async () => {
  return await axios.get(${API_URL}/comments);
};