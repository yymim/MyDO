import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const fetchTodos = (date) => API.get(`/todos?date=${date}`);
export const createTodo = (data) => API.post('/todos', data);
export const updateTodo = (id, data) => API.put(`/todos/${id}`, data);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
