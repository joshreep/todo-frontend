import TaskForm from '@/components/Form/TaskForm';
import { FC } from 'react';

type EditPageProps = {
  params: Promise<{ id: string }>;
};

const Edit: FC<EditPageProps> = async ({ params }) => {
  const id = (await params).id;
  console.log({ params: await params });
  const res = await fetch(`${process.env.BACKEND_URL}/tasks/${id}`);
  const task = await res.json();

  return <TaskForm task={task} httpMethod="PUT" />;
};

export default Edit;
