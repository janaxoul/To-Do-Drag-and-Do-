import { createContext, useEffect, useState } from "react";
import api from "./api";

export const TodoContext = createContext();

function Context({ children }) {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTodo = async () => {
    setLoading(true);
    try {
      const res = await api.get("/allTodo");
      setTodo(res.data);
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
      setTodo(prev => [...prev, res.data]);
      setError(null);
    } catch (err) {
      console.error("Error creating todo:", err);
      setError("Failed to create todo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <TodoContext.Provider value={{ todo, setTodo, postTodo, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
}

export default Context;
