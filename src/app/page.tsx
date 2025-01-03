import CreateTaskButton from '@/components/CreateTaskButton';
import TaskList from '@/components/TaskList/TaskList';

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/tasks`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const tasks = await response.json();

  return (
    <>
      <CreateTaskButton />
      <TaskList tasks={tasks} />
    </>
  );
}
