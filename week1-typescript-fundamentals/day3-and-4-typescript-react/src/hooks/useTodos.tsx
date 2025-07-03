import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function isTodo(item: unknown): item is Todo {
  if (typeof item !== 'object' || item === null) return false;

  return (
    'id' in item &&
    typeof item.id === 'number' &&
    'text' in item &&
    typeof item.text === 'string' &&
    'completed' in item &&
    typeof item.completed === 'boolean'
  );
}

function isTodoArray(array: unknown): array is Todo[] {
  if (!Array.isArray(array)) return false;
  for (const item of array) {
    if (!isTodo(item)) return false;
  }
  return true;
}

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('todos');
      if (storedData === null) {
        setTodos([]);
        return;
      }

      const parsedData = JSON.parse(storedData);

      if (isTodoArray(parsedData)) {
        setTodos(parsedData);
      } else {
        localStorage.removeItem('todos');
        setTodos([]);
      }
    } catch (error) {
      console.error('Failed to load todos from localStorage:', error);
      localStorage.removeItem('todos');
      setTodos([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save todos to localstorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  function addTodo(text: string) {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  function toggleCompleted(id: number) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }

  function deleteTodo(id: number) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  return { todos, addTodo, toggleCompleted, deleteTodo };
}
