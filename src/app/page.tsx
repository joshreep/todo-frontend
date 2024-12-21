'use client';

import CreateTaskButton from '@/components/CreateTaskButton';
import SearchBar from '@/components/SearchBar';
import TaskList from '@/components/TaskList/TaskList';
import { Task } from '@/types';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(`${process.env.BACKEND_URL}/tasks`);
      const tasksData = await res.json();

      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <CreateTaskButton />
      <SearchBar onUpdate={(tasks) => setTasks(tasks)} />
      <TaskList tasks={tasks} />
    </>
  );
}
