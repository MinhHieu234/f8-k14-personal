
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getProducts = () => axios.get(`${API_URL}/products`);
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const addProduct = (data) => axios.post(`${API_URL}/products`, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);
