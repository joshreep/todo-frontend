'use client';

import { Task } from '@/types';
import { FC, MouseEventHandler } from 'react';
import Check from '../Check';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface TaskListItemProps {
  task: Task;
}

const TaskListItem: FC<TaskListItemProps> = ({ task }) => {
  const router = useRouter();

  const handleChecked = async (completed: boolean) => {
    await fetch('/api', {
      method: 'PUT',
      body: JSON.stringify({
        id: task.id,
        title: task.title,
        color: task.color,
        completed,
      }),
    });
    router.refresh();
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    if (window.confirm(`Are you sure you want to delete "${task.title}"`)) {
      await fetch('/api', {
        method: 'DELETE',
        body: JSON.stringify({ id: task.id }),
      });
      router.refresh();
    }
  };

  return (
    <Link
      href={`/edit/${task.id}`}
      className="flex items-center gap-4 bg-foreground rounded-lg p-5"
    >
      <Check checked={task.completed} onClick={handleChecked} />
      <span
        className={classNames('text-sm flex-grow', {
          'line-through text-secondary-text': task.completed,
        })}
      >
        {task.title}
      </span>
      <button onClick={handleDelete}>
        <Image src="/trash.svg" alt="trash icon" height={24} width={24} />
      </button>
    </Link>
  );
};

export default TaskListItem;
