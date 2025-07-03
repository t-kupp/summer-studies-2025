import useTodos from '@/hooks/useTodos';
import { useEffect, useState } from 'react';

export default function TodoList() {
  const [textInput, setTextInput] = useState('');
  const { todos, addTodo, toggleCompleted, deleteTodo } = useTodos();

  useEffect(() => {
    const count = todos.length;
    if (count === 0) {
      document.title = 'All done!';
    } else {
      document.title = `${count} task${count > 1 ? 's' : ''} to do!`;
    }
  }, [todos]);

  function handleAddTodo() {
    addTodo(textInput);
    setTextInput('');
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
        <button className='border px-1' onClick={handleAddTodo}>
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
