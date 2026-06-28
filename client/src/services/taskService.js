import axios from "axios";

const API = axios.create({
  baseURL: "https://taskflow-backend-01ly.onrender.com/api/tasks",
});

export const getTasks = async () => {
  const response = await API.get("/");
  return response.data.data;
};

export const createTask = async (task) => {
  const response = await API.post("/", task);
  return response.data.data;
};

export const updateTask = async (id, task) => {
  const response = await API.put(`/${id}`, task);
  return response.data.data;
};

export const deleteTask = async (id) => {
  await API.delete(`/${id}`);
};