'use client';

import { Task } from '@/types';
import { FC, useCallback, useState } from 'react';
import TaskListEmpty from './TaskListEmpty';
import TaskListHeader from './TaskListHeader';
import TaskListItem from './TaskListItem';
import SearchBar from '../SearchBar';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FC<TaskListProps> = (props) => {
  const [tasks, setTasks] = useState(props.tasks);

  const completedCount = tasks.filter((task) => task.completed).length;

  const getCompletedPillText = () => {
    if (tasks.length === 0) return '0';
    return `${completedCount} of ${tasks.length}`;
  };

  const onUpdate = useCallback(async () => {
    const res = await fetch('/api');
    setTasks(await res.json());
  }, []);

  return (
    <>
      <SearchBar onUpdate={setTasks} />
      <div className="flex flex-col pt-10">
        <TaskListHeader
          taskCount={tasks.length}
          completedCount={getCompletedPillText()}
        />
        {tasks.length === 0 ? (
          <TaskListEmpty />
        ) : (
          <div className="flex flex-col gap-4">
            {tasks.map((task) => (
              <TaskListItem key={task.id} task={task} onUpdate={onUpdate} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
