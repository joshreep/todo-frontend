import { FC } from 'react';
import Pill from '../Pill';

interface TaskListHeaderProps {
  completedCount: number | string;
  taskCount: number | string;
}

const TaskListHeader: FC<TaskListHeaderProps> = ({
  completedCount,
  taskCount,
}) => {
  return (
    <>
      <div className="flex justify-between w-full pb-4">
        <span className="flex gap-2 align-middle">
          <span className="text-primary font-bold text-sm flex align-middle">
            Tasks
          </span>
          <Pill>{taskCount}</Pill>
        </span>
        <span className="flex gap-2 align-middle">
          <span className="text-secondary font-bold text-sm flex align-middle">
            Completed
          </span>
          <Pill>{completedCount}</Pill>
        </span>
      </div>
      {!taskCount && <hr className="border-light-gray" />}
    </>
  );
};

export default TaskListHeader;
