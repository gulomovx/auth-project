import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

// Fetching all products from json data....
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data.products;
};

// Fetching single product by 
export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data.users;
};

// Fetch posts
export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data.posts;
};

// Fetch todos
export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data.todos;
};
