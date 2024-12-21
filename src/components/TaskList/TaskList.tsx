'use client';

import { Task } from '@/types';
import { FC } from 'react';
import TaskListEmpty from './TaskListEmpty';
import TaskListHeader from './TaskListHeader';
import TaskListItem from './TaskListItem';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  const completedCount = tasks.filter((task) => task.completed).length;

  const getCompletedPillText = () => {
    if (tasks.length === 0) return '0';
    return `${completedCount} of ${tasks.length}`;
  };

  return (
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
            <TaskListItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
