import { createContext, useContext, useEffect, useState } from "react";
import * as taskService from "../services/taskService";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch All Tasks
  // ==========================

  const fetchTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Create Task
  // ==========================

  const addTask = async (taskData) => {
    await taskService.createTask(taskData);
    fetchTasks();
  };

  // ==========================
  // Update Task
  // ==========================

  const editTask = async (id, taskData) => {
    await taskService.updateTask(id, taskData);
    fetchTasks();
  };

  // ==========================
  // Delete Task
  // ==========================

  const removeTask = async (id) => {
    await taskService.deleteTask(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,

        fetchTasks,

        addTask,

        editTask,

        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);