import CreateTaskButton from '@/components/CreateTaskButton';
import TaskList from '@/components/TaskList/TaskList';

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/tasks`);
  const tasks = await res.json();

  return (
    <>
      <CreateTaskButton />
      <TaskList tasks={tasks} />
    </>
  );
}
