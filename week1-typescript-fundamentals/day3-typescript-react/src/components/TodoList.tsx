import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [textInput, setTextInput] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Setting document title based on todo tasks amount
  useEffect(() => {
    const count = todos.length;
    if (count === 0) {
      document.title = 'All done!';
    } else {
      document.title = `${count} task${count > 1 ? 's' : ''} to do!`;
    }
  }, [todos]);

  // Load todos from localstorage
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (e) {
      console.error(e);
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

  function addTodo() {
    if (!textInput.trim()) return;
    setTodos([...todos, { id: Date.now(), text: textInput, completed: false }]);
    setTextInput('');
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

  return (
    <div>
      <div className='flex gap-2'>
        <input
          type='text'
          name='todo-input'
          id='todo-input'
          className='border'
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <button className='border px-1' onClick={addTodo}>
          Add
        </button>
      </div>
      <div className='max-w-lg w-full flex flex-col gap-2'>
        {todos.map((todo) => (
          <div className='flex items-center justify-between' key={todo.id}>
            <p>{todo.text}</p>
            <div className='flex gap-2 items-center'>
              <p
                onClick={() => toggleCompleted(todo.id)}
                className='text-xl font-mono cursor-default select-none w-4 h-4 border flex items-center justify-center'
              >
                {todo.completed ? '✓' : ''}
              </p>
              <button className='border px-1' onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
