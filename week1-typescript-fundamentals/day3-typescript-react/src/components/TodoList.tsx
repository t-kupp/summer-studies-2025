import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    addTodo('Mow the lawn');
  }, []);

  function addTodo(text: string) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  function toggleCompleted(id: number) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <div className='flex items-center gap-1' key={todo.id}>
          <p>{todo.text}</p>
          <p
            onClick={() => toggleCompleted(todo.id)}
            className='text-lg font-mono cursor-default select-none'
          >
            {todo.completed ? '■' : '□'}
          </p>
        </div>
      ))}
    </div>
  );
}
