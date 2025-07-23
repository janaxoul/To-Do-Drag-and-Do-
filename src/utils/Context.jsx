import { createContext, useEffect, useState } from "react";
import api from "./api";

export const TodoContext = createContext();

function Context({ children }) {
  const [todo, setTodo] = useState([]);
  const [completed, setcompleted] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTodo = async () => {
    setLoading(true);
    try {
      const res = await api.get("/allTodo");
      setTodo(res.data);
      console.log(res.data)
      setError(null);
    } catch (err) {
      console.error("Error fetching todos:", err);
      setError("Failed to load todos.");
    } finally {
      setLoading(false);
    }
  };
  const getCompleted = async () => {
    setLoading(true);
    try {
      const res = await api.get("/completed");
      setcompleted(res.data);
      console.log(res.data)
      setError(null);
    } catch (err) {
      console.error("Error fetching todos:", err);
      setError("Failed to load todos.");
    } finally {
      setLoading(false);
    }
  };

  const postTodo = async (newTodo) => {
    setLoading(true);
    try {
      const res = await api.post("/setTodo", newTodo);
      // setTodo(prev => [...prev, res.data]);
      setError(null);
    } catch (err) {
      console.error("Error creating todo:", err);
      setError("Failed to create todo.");
    } finally {
      setLoading(false);
    }
  };
  
  const markTodoCompleted = async (id) => {
  try {
    const response = await api.patch(`/${id}/complete`);
    const updatedTodo = response.data;
    console.log(updatedTodo)

    setTodo((prev) =>
      prev.filter(item => item.id !== id)  // <-- Remove the item
    );

    console.log(`Todo with id ${id} marked as completed`);
    return true; // signal success
  }
  catch (error) {
    console.error(`Failed to mark todo with id ${id} as completed`, error);
    return false; // signal failure
  }
};

  useEffect(() => {
    getTodo();
    getCompleted();
    // setTodo();
  }, []);

  return (
    <TodoContext.Provider value={{ todo, completed, getTodo, setTodo, postTodo, markTodoCompleted, getCompleted, completed, setcompleted, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
}

export default Context;
