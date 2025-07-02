'use client';

import TodoList from '@/components/TodoList';
import Counter from '../components/Counter';
import UserCard from '../components/UserCard';

export default function Home() {
  return (
    <div className='p-4'>
      <UserCard />
      <Counter />
      <TodoList />
    </div>
  );
}
