import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const addUser = async (user) => {
  const response = await api.post('/users', user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};